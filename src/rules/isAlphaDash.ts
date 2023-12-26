export default (value: any): boolean => {
  // Check if the value contains only alphanumeric characters, dashes, and underscores
  const regex = /^[a-zA-Z0-9-_]+$/;
  return regex.test(value);
};
