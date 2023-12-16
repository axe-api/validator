export default (value: any, date: any): boolean => {
  // Check if the value is null or undefined
  if (value === null || value === undefined) {
    return true;
  }

  // Parse the date strings or use Date objects based on your needs
  const inputValue = new Date(date);
  const comparisonDate = new Date(value);

  if (isNaN(inputValue.getTime()) || isNaN(comparisonDate.getTime())) {
    return false;
  }

  // Compare the dates
  return comparisonDate < inputValue;
};
