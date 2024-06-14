import csv from "csv";
import { Transform } from "stream";
import { cleanRow, transformRow } from "../../service/Transformation";

export interface IInterSprintOffersReader {
  getTransformStream(): Transform;
  getTotalRecords(): number;
}

export class InterSprintOffersReader implements IInterSprintOffersReader {
  private totalRecords = 0;
  private validRecords = 0;
  private invalidRecords = 0;

  getTransformStream(): Transform {
    return csv.transform((row) => {
      this.totalRecords++;
      row = cleanRow(row);
      if (row === null) {
        this.invalidRecords++;
        return null; // Return null to skip this row
      }

      row = transformRow(row);
      this.validRecords++;
      return row;
    });
  }
  getTotalRecords(): number {
    return this.totalRecords;
  }

  getValidRecords(): number {
    return this.validRecords;
  }

  getInvalidRecords(): number {
    return this.invalidRecords;
  }
}
