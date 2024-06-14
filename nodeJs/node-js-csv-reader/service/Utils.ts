export const validateEan = (eancode: string): string => {
  return /^[0-9]{13}$/.test(eancode) ? eancode : ""; // Return the valid EAN or an empty string
};

export const isEmtyField = (input: string) => input?.trim().length === 0;

export const getDigits = (str: string) => {
  const digits = str.match(/\d+/);
  return digits ? digits[0] : "";
};
export const getLetters = (str: string) => {
  const letters = str.match(/[a-zA-Z]+/);
  return letters ? letters[0] : "";
};

export const parseStockQty = (string: string) => {
  const val = Number(string);
  if (val) {
    return String(val);
  } else {
    const digits = string.match(/\d+/);
    return digits ? digits[0] : "";
  }
};

export const parseSeason = (season: string) => {
  switch (season) {
    case "Summer":
      return "S";
    case "Winter":
      return "W";
    case "Allseason":
      return "A";
    default:
      return "";
      break;
  }
};

export const parseToBoolean = (field: string) => {
  if (field === "J") {
    return "true";
  } else if (field === "N") {
    return "false";
  } else {
    return "";
  }
};

export const validateUrl = (url: string, validDomen: string) => url.includes(validDomen);

export const validateEprelId = (url: string, id: string) => {
  const urlParts = url.split("/").filter((i) => i.length > 0);
  const EprelId = urlParts[urlParts.length - 1];

  return EprelId === id;
};

export const matchFileName = (file: string) => {
  const res = file.match(/[^/\\&\?]+\.\w{3,4}(?=([\?&].*$|$))/);

  return res ? res[0] : "";
};
