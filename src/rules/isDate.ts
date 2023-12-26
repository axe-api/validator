import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { getOptions } from "../Options";
dayjs.extend(customParseFormat);

export default (value: any, dateFormat?: string): boolean => {
  const options = getOptions();
  const format = dateFormat ?? options.dateFormat;
  return dayjs(value, format, true).isValid();
};
