import fs from "fs";
import csv from "csv";
import { Offer } from "../entity/Offer";
import { IInterSprintOffersReader, InterSprintOffersReader } from "./InterSprintOffersReader";
import { matchFileName } from "../../service/Utils";
// import { removedColumns, mappings, defaults } from "../../service/Mapping";
import { removedColumns, mappings, defaults } from "../../service/MappingMaxxis";
import { pipeline as streamPipeline } from "stream";
import { promisify } from "util";

const pipeline = promisify(streamPipeline);

interface IWriteFileSettings {
  parcer: { delimiter?: string; columns?: boolean };
  stringifyer: { header?: any; delimiter?: string };
}

interface IInterSprintOffersWriter {
  writeFile: (
    settings: IWriteFileSettings,
    fileStream: NodeJS.ReadableStream,
    tempFilePath: string,
    reader: IInterSprintOffersReader,
    dataFileName: string
  ) => Promise<{ fileOutput: string; offerEntity: Offer }>;
}

export class InterSprintOffersWriter implements IInterSprintOffersWriter {
  async writeFile(
    settings: IWriteFileSettings,
    fileStream: NodeJS.ReadableStream,
    tempFilePath: string,
    reader: IInterSprintOffersReader,
    dataFileName: string
  ): Promise<{ fileOutput: string; offerEntity: Offer }> {
    const parser = csv.parse(settings.parcer);
    const stringifier = csv.stringify(settings.stringifyer);
    const supplierId = process.env.IS_ID || "";
    const dataUpdatedAt = new Date().toISOString();
    const startTime = performance.now();
    // const transformStream = reader.getTransformStream();
    const transformStream = reader.getTransformStream({ removedColumns, mappings, defaults });

    const writableStream = fs.createWriteStream(tempFilePath);

    try {
      await pipeline(fileStream, parser, transformStream, stringifier, writableStream);

      const endTime = performance.now();
      const conversionTimeMs = Math.round(endTime - startTime);
      const allRecords = reader.getTotalRecords();
      const validRecords = reader.getValidRecords();
      const invalidRecords = reader.getInvalidRecords();
      const stats = fs.statSync(tempFilePath);
      const fileSize = stats.size;
      const fileOutput = fs.readFileSync(tempFilePath, "utf-8");

      const conversionInfo = {
        info: `Conversion process done: ${validRecords} valid items have been found in ${dataFileName} file`,
        conversionTimeMs,
        allRecords,
        validRecords,
        invalidRecords,
      };
      const offerEntity = new Offer(supplierId, dataFileName, fileSize, dataUpdatedAt, conversionInfo);

      return { fileOutput, offerEntity };
    } catch (error) {
      console.error("Error in stream pipeline:", error);
      throw error;
    }
  }
}
