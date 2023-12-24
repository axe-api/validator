export default (value: any): boolean => {
  if (value === null || value === undefined) {
    return true; // NULL or undefined is considered valid
  }

  const date = new Date(value);
  return !isNaN(date.getTime());
};
