export default (value: any): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  return typeof value === "string";
};
