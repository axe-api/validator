export const getValueViaPath = (data: any, path: string): any => {
  const keys = path.split(".");

  let value = keys.reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return acc[key];
    }
    return undefined;
  }, data);

  if (typeof value === "string") {
    value = value.trim();
  }

  if (value === "") {
    return null;
  }

  return value;
};
