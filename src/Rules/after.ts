export default (value: any, date: any): boolean => {
  const inputValue = new Date(value);
  const comparisonDate = new Date(date);

  if (isNaN(inputValue.getTime()) || isNaN(comparisonDate.getTime())) {
    return false;
  }

  return inputValue > comparisonDate;
};
