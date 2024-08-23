// import { removedColumns, mappings, defaults } from "./Mapping";

export const cleanRow = (row: Record<string, any>, Mapping: any): any => {
  Mapping.removedColumns.forEach((item: any) => delete row[item]);

  if ("sysnr" in row && row["sysnr"] === "") {
    return null;
  }

  return row;
};

export const transformRow = (row: Record<string, any>, Mapping: any): Record<string, any> => {
  // Apply default values
  Object.entries(Mapping.defaults).forEach(([key, value]) => {
    row[key] = value;
  });

  for (const [key, value] of Object.entries(Mapping.mappings)) {
    if (row[key] !== undefined) {
      const [newKey, transformFn, secondKey, secondTransformFn] = value as any;
      row[newKey] = transformFn ? transformFn(row[key], row) : row[key];
      if (secondKey) {
        row[secondKey] = secondTransformFn(row[key]);
      }
      delete row[key];
    }
  }

  return row;
};
