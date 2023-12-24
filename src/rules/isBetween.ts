export default (value: any, min: any, max: any): boolean => {
  // Check if the value is null or undefined
  if (value === null || value === undefined) {
    return true;
  }

  // Convert min and max to numbers if they are not already
  const minValue = typeof min === "number" ? min : parseFloat(min);
  const maxValue = typeof max === "number" ? max : parseFloat(max);

  // Check the size based on the type of value
  if (typeof value === "string") {
    return value.length >= minValue && value.length <= maxValue;
  } else if (typeof value === "number") {
    return value >= minValue && value <= maxValue;
  }

  // For other types, return false
  return false;
};
