import { removedColumns, mappings, defaults } from "./Mapping";

export const cleanRow = (row: Record<string, any>): any => {
  removedColumns.forEach((item) => delete row[item]);

  // Remove the row if the "sysnr" field is empty
  if ("sysnr" in row && row["sysnr"] === "") {
    return null;
  }

  return row;
};

export const transformRow = (row: Record<string, any>): Record<string, any> => {
  //   const { defaults, ...fieldMappings } = mappings;

  // Apply default values
  Object.entries(defaults).forEach(([key, value]) => {
    row[key] = value;
  });
  //   // Apply default values
  //   for (const [key, value] of Object.entries(defaults)) {
  //     row[key] = value;
  //   }

  for (const [key, value] of Object.entries(mappings)) {
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
