export default (value: any, date: any): boolean => {
  // Check if the value is null or undefined
  if (value === null || value === undefined) {
    return true;
  }

  const inputValue = new Date(value);
  const comparisonDate = new Date(date);

  if (isNaN(inputValue.getTime()) || isNaN(comparisonDate.getTime())) {
    return false;
  }

  return inputValue > comparisonDate;
};
