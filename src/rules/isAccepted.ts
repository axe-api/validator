export default (value: any): boolean => {
  const acceptedValues = ["yes", "on", 1, "1", true];
  return acceptedValues.includes(value);
};
