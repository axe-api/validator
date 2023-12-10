export default (value: any, min: any): boolean => {
  min = parseInt(min);

  if (!value) {
    return true;
  }

  return value.toString().trim().length >= min;
};
