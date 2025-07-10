export default (value: any): boolean => {
  const regex = /^[a-zA-Z0-9-_]+$/;
  return regex.test(value);
};
