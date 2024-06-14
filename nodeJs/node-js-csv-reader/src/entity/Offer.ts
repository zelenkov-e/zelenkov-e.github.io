interface IConversionInfo {
  info: string;
  conversionTimeMs: number;
}

interface IOffer {
  supplierId: string;
  dataFileName: string;
  dataUrl: string;
  dataFileSize: string;
  dataUpdatedAt: string;
  conversionInfo: IConversionInfo;
}

export class Offer implements IOffer {
  supplierId: string;
  dataFileName: string;
  dataUrl: string;
  dataFileSize: string;
  dataUpdatedAt: string;
  conversionInfo: IConversionInfo;

  constructor(
    supplierId: string,
    dataFileName: string,
    dataUrl: string,
    dataFileSize: string,
    dataUpdatedAt: string,
    conversionInfo: IConversionInfo
  ) {
    this.supplierId = supplierId;
    this.dataFileName = dataFileName;
    this.dataUrl = dataUrl;
    this.dataFileSize = dataFileSize;
    this.dataUpdatedAt = dataUpdatedAt;
    this.conversionInfo = conversionInfo;
  }
}
