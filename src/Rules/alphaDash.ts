export default (value: any): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  if (value.toString().trim().length === 0) {
    return true;
  }

  // Check if the value contains only alphanumeric characters, dashes, and underscores
  const regex = /^[a-zA-Z0-9-_]+$/;
  return regex.test(value);
};
