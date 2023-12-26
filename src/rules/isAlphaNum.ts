export default (value: any): boolean => {
  if (typeof value === "boolean") {
    return false;
  }

  // Check if the value consists entirely of alpha-numeric characters
  return /^[a-zA-Z0-9]+$/.test(value);
};
