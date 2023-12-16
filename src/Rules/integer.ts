export default (value: any): boolean => {
  return value === null || value === undefined || Number.isInteger(value);
};
