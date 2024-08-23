import { validateEan, validateString } from "./Utils";

export const defaults = {
  Version: 1,
  StockName_1: "MAIN",
};

export const mappings = {
  "Artikelnr.": ["SupplierOfferId"],
  ean: ["EAN", validateEan],
  Beschreibung: ["ProfileDesc"],
  "Beschreibung 2": ["TyreName"],
  Bestand: ["StockQty_1"],
  Preis: ["PP_1 (purchase price 1)"],
};

export const removedColumns: string[] = [];
