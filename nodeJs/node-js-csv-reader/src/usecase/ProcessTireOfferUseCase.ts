import { InterSprintOffersReader } from "../adapters/InterSprintOffersReader";
import { InterSprintOffersWriter } from "../adapters/InterSprintOffersWriter";
import { DataUpdateNotifierService } from "../adapters/services/DataUpdateNotifierService";
import axios from "axios";
import { Readable } from "stream";

export class ProcessTireOfferUseCase {
  static async process(): Promise<void> {
    try {
      const dataUpdateNotifierService = new DataUpdateNotifierService();
      const { dataUrl, dataOtput } = await dataUpdateNotifierService.fetchDataUrls();
      const fileReader = new InterSprintOffersReader();
      const fileWriter = new InterSprintOffersWriter();
      const settings = {
        parcer: {
          delimiter: ";",
          columns: true,
          // ---------------- maxiss tyres additional parcer settings ------------//
          quote: '"', // Set your quote character
          escape: '"', // Set your escape character
          skip_empty_lines: true, // Skip empty lines
          relax_quotes: true, // Allow unescaped quotes in quoted fields
          relax_column_count: true, // Handle rows with fewer/more columns gracefully
        },
        stringifyer: { header: true, delimiter: ";" },
      };

      const response = await axios({ url: dataUrl, method: "GET", responseType: "stream" });
      const fileReadStream = response.data as Readable;
      const dataFileName = "fileName";

      await fileWriter.writeFile(settings, fileReadStream, dataOtput, fileReader, dataFileName);

      console.log("Data processed and written to output file successfully.");
    } catch (error) {
      console.error("Error processing data:", error);
    }
  }
}
