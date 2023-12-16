export default (value: any): boolean => {
  // Check if the value is null or undefined
  if (value === null || value === undefined) {
    return true;
  }

  if (value.toString().trim().length === 0) {
    return true;
  }

  if (typeof value === "boolean") {
    return false;
  }

  // Check if the value consists entirely of alpha-numeric characters
  return /^[a-zA-Z0-9]+$/.test(value);
};
