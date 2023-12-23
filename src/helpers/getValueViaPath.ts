export const getValueViaPath = (data: any, path: string): any => {
  const keys = path.split(".");

  return keys.reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return acc[key];
    }
    return undefined;
  }, data);
};
