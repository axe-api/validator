import { IContext } from "../Interface";

export default (value: any, min: any, max: any, extra?: IContext): boolean => {
  // Check if the value is null or undefined
  if (value === null || value === undefined) {
    return true;
  }

  // Convert min and max to numbers if they are not already
  const minValue = typeof min === "number" ? min : parseFloat(min);
  const maxValue = typeof max === "number" ? max : parseFloat(max);

  // If there is a numeric definition on the field, we should test the numeric
  // values of the data.
  const shouldBeNumeric =
    extra?.definition.split("|").includes("numeric") || false;
  if (shouldBeNumeric) {
    value = parseFloat(value);
  }

  // Check the size based on the type of value
  if (Array.isArray(value)) {
    return value.length >= minValue && value.length <= maxValue;
  } else if (typeof value === "string" && shouldBeNumeric === false) {
    return value.length >= minValue && value.length <= maxValue;
  } else if (typeof value === "number") {
    return value >= minValue && value <= maxValue;
  }

  // For other types, return false
  return false;
};
