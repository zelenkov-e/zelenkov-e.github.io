interface IConversionInfo {
  info: string;
  conversionTimeMs: number;
  allRecords: number;
  validRecords: number;
  invalidRecords: number;
}

export interface IOffer {
  supplierId: string;
  dataFileName: string;
  dataLength: number;
  dataUpdatedAt: string;
  conversionInfo: IConversionInfo;
  dataUrl?: string;
}

export class Offer implements IOffer {
  supplierId: string;
  dataFileName: string;
  dataLength: number;
  dataUpdatedAt: string;
  conversionInfo: IConversionInfo;

  constructor(supplierId: string, dataFileName: string, dataLength: number, dataUpdatedAt: string, conversionInfo: IConversionInfo) {
    this.supplierId = supplierId;
    this.dataFileName = dataFileName;
    this.dataLength = dataLength;
    this.dataUpdatedAt = dataUpdatedAt;
    this.conversionInfo = conversionInfo;
  }
}
