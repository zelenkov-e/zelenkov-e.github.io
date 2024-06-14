import { InterSprintOffersReader } from "../adapters/InterSprintOffersReader";
import { InterSprintOffersWriter } from "../adapters/InterSprintOffersWriter";
import { DataUpdateNotifierService } from "../adapters/services/DataUpdateNotifierService";

export class ProcessTireOfferUseCase {
  static async process(): Promise<void> {
    try {
      const dataUpdateNotifierService = new DataUpdateNotifierService();
      const { dataUrl, dataOtput } = await dataUpdateNotifierService.fetchDataUrls();
      const fileReader = new InterSprintOffersReader();
      const fileWriter = new InterSprintOffersWriter();
      const settings = {
        parcer: { delimiter: ";", columns: true },
        stringifyer: { header: true, delimiter: ";" },
      };
      await fileWriter.writeFile(settings, dataUrl, dataOtput, fileReader);

      console.log("Data processed and written to output file successfully.");
    } catch (error) {
      console.error("Error processing data:", error);
    }
  }
}
