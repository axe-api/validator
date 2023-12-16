export default (value: any): boolean => {
  // Check for null or undefined
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "object") {
    return false;
  }

  if (String(value).trim().length === 0) {
    return true;
  }

  // Check if the string representation is numeric
  const stringValue = String(value).trim();
  return stringValue !== "" && !isNaN(Number(stringValue));
};
