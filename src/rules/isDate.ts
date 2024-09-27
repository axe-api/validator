import { parse } from "date-fns";
import { getOptions } from "../Options";

export default (value: any, dateFormat?: string): boolean => {
  const options = getOptions();
  const format = dateFormat ?? options.dateFormat;
  const date: any = parse(value, format, new Date());
  return !isNaN(date);
};
