export default (value: any): boolean => {
  // Check if the value is a boolean or a valid string representation of boolean
  if (typeof value === "boolean") {
    return true;
  }

  const lowerCaseValue = String(value).toLowerCase();

  // Check for valid boolean string representations
  return ["true", "false", "0", "1"].includes(lowerCaseValue);
};
