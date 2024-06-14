import fs from "fs";
import csv from "csv";
import { Offer } from "../entity/Offer";
import { InterSprintOffersReader } from "./InterSprintOffersReader";
import { matchFileName } from "../../service/Utils";

interface IWriteFileSettings {
  parcer: { delimiter?: string; columns?: boolean };
  stringifyer: { header?: any; delimiter?: string };
}

interface IInterSprintOffersWriter {
  writeFile: (settings: IWriteFileSettings, inputFilePath: string, outputFilePath: string, reader: InterSprintOffersReader) => Promise<void>;
}

export class InterSprintOffersWriter implements IInterSprintOffersWriter {
  writeFile(settings: IWriteFileSettings, inputFilePath: string, outputFilePath: string, reader: InterSprintOffersReader): Promise<void> {
    const parser = csv.parse(settings.parcer);
    const stringifier = csv.stringify(settings.stringifyer);
    const supplierId = "12345"; // id of the supplier in ERP
    const dataFileName = matchFileName(outputFilePath);
    const dataUpdatedAt = new Date().toISOString();
    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);
    const startTime = performance.now();
    const transformStream = reader.getTransformStream();

    return new Promise<void>((resolve, reject) => {
      input
        .pipe(parser)
        .pipe(transformStream)
        .pipe(stringifier)
        .pipe(output)
        .on("finish", async () => {
          try {
            const endTime = performance.now();
            const conversionTimeMs = Math.round(endTime - startTime);
            const allRecords = reader.getTotalRecords();
            const validRecords = reader.getValidRecords();
            const invalidRecords = reader.getInvalidRecords();
            const stats = fs.statSync(outputFilePath);

            const conversionInfo = {
              info: `Conversion process done : ${validRecords} valid items has been found in ${dataFileName} file`,
              conversionTimeMs,
              allRecords,
              validRecords,
              invalidRecords,
            };
            const fileEntity = new Offer(supplierId, dataFileName, outputFilePath, stats.size.toString(), dataUpdatedAt, conversionInfo);
            console.log(`CSV successfully processed and saved to ${outputFilePath}`);
            console.log(`File Entity:`, fileEntity);
            resolve();
          } catch (error) {
            reject(error);
          }
        })
        .on("error", reject);
    });
  }
}
