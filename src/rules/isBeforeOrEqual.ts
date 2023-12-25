import { IContext } from "../Interface";

export default (value: any, date: any, extra?: IContext): boolean => {
  // Parse the date strings or use Date objects based on your needs
  const inputValue = new Date(value);
  const comparisonDate = extra?.data[date]
    ? new Date(extra?.data[date])
    : new Date(date);

  if (isNaN(inputValue.getTime()) || isNaN(comparisonDate.getTime())) {
    return false;
  }

  // Compare the dates
  return inputValue <= comparisonDate;
};
