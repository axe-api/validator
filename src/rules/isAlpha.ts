export default (value: any): boolean => {
  return /^[a-zA-Z]+$/.test(value);
};
