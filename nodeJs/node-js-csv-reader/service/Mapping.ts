import { isEmtyField, validateEan, parseStockQty, parseSeason, getDigits, getLetters, parseToBoolean, validateUrl, validateEprelId } from "./Utils";

export const isEprelUrl = "https://eprel.ec.europa.eu/";
export const isEtyrelUrl = "https://www.etyre.net/";

export const removedColumns: string[] = [
  "type ",
  "group description ",
  "itemcode",
  "group ",
  "brand",
  "E-mark",
  "European",
  "rim protection",
  "age",
  "demo",
  "runflat",
  "Snowgrip",
  "Icegrip",
  "wcat",
  "",
];

export const mappings = {
  sysnr: ["SupplierOfferId"],
  eancode: ["EAN", validateEan],
  "ip-code": ["ManufacturerTyreId"],
  "brand description ": ["Manufacturer ", (val: string) => val.charAt(0) + val.slice(1).toLowerCase()],
  "description ": ["TyreDesc"],
  "nett-price": ["PP_1"],
  gross: ["RP"],
  available: ["StockQty_1", (val: string) => (isEmtyField(val) ? "" : parseStockQty(val))],
  season: ["Season", parseSeason],
  diameter: ["RadiusInch"],
  "width tyre": ["Width"],
  "aspect ratio": ["AspectRatio"],
  "LI/SI": ["LoadIndex_1", getDigits, "SpeedIndex_1", getLetters],
  "Fuel effeciency": ["EnergyClass"],
  "Wet grip": ["WetGripClass"],
  Noiselevel: ["RollingNoiseClass"],
  Rollnoise: ["RollingNoise_dB"],
  ms: ["MS_Mark", parseToBoolean],
  "3pmsf": ["3PMSF_Mark", parseToBoolean],
  weight: ["WeightKg", (val: string) => (val ? Math.round(parseFloat(val.replace(",", "."))) : "")],
  "EPREL-url": ["EPREL_URL", (val: string) => (validateUrl(val, isEprelUrl) ? val : "")],
  "EPREL-id": ["EPREL_ID", (val: string, row: any) => (validateEprelId(row["EPREL_URL"], val) ? val : "")],
  photolink: ["TyreImageURL_1", (val: string) => (validateUrl(val, isEtyrelUrl) ? val : "")],
  //   defaults: {
  //     Version: 1,
  //     StockName_1: "MAIN",
  //   },
};

export const defaults = {
  Version: 1,
  StockName_1: "MAIN",
};
