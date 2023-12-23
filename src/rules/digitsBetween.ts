export default (value: any, min: any, max: any): boolean => {
  // Check if value is NULL or undefined
  if (value === null || value === undefined) {
    return true;
  }

  // Check if the value is numeric
  if (typeof value !== "number" && isNaN(Number(value))) {
    return false;
  }

  if (min === null || min === undefined || max === null || max === undefined) {
    throw new Error(`Incorrect validation rule: digits:min,max`);
  }

  if (typeof min !== "number" && isNaN(Number(min))) {
    // Check if the min is numeric
    throw new Error(`Incorrect validation rule: digits:min,max`);
  }

  // Check if the max is numeric
  if (typeof max !== "number" && isNaN(Number(max))) {
    throw new Error(`Incorrect validation rule: digits:min,max`);
  }

  // Shouldn't be a float value
  if (Number(value) % 1 !== 0) {
    return false;
  }

  // Check if the length is exact
  const length = String(value).trim().length;
  return length >= Number(min) && length <= Number(max);
};
