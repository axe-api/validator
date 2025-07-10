export default (value: any): boolean => {
  if (typeof value === "boolean") {
    return false;
  }

  return /^[a-zA-Z0-9]+$/.test(value);
};
