import { ProcessTireOfferUseCase } from "../../usecase/ProcessTireOfferUseCase";
import { Request, Response } from "express";

class FileController {
  static async processFiles(req: Request, res: Response): Promise<void> {
    try {
      await ProcessTireOfferUseCase.process();
      res.send("CSV processing started.");
    } catch (error) {
      res.status(500).send("An error occurred during CSV processing.");
    }
  }
}

export default FileController;
