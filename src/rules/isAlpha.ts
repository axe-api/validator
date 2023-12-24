export default (value: any): boolean => {
  if (value == null || value === undefined) {
    return true;
  }

  if (value.toString().trim().length === 0) {
    return true;
  }

  return /^[a-zA-Z]+$/.test(value);
};
