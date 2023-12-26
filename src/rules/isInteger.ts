export default (value: any): boolean => {
  if (isNaN(value)) {
    return false;
  }
  return String(parseInt(value, 10)) === String(value);
};
