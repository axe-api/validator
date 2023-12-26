export default (value: any): boolean => {
  return /^[0-9a-f]+$/i.test(String(value).trim());
};
