export default (value: any): boolean => {
  // Check for null or undefined
  if (
    value === null ||
    value === undefined ||
    String(value).trim().length === 0
  ) {
    return true;
  }

  return /^[0-9a-f]+$/i.test(String(value).trim());
};
