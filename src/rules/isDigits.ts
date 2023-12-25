export default (value: any, length: any): boolean => {
  // Check if the value is numeric
  if (typeof value !== "number" && isNaN(Number(value))) {
    return false;
  }

  // Check if the length is numeric
  if (typeof length !== "number" && isNaN(Number(length))) {
    throw new Error(`Incorrect validation rule: digits:number`);
  }

  // Shouldn't be a float value
  if (Number(value) % 1 !== 0) {
    return false;
  }

  // Check if the length is exact
  return String(value).trim().length === Number(length);
};
