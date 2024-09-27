/**
 * The field under validation must be a valid date format.
 *
 * @example
 *  import { date } from "robust-validator"
 *
 *  const definition = {
 *    value: [date("yyyy-MM-dd")]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#date-format
 */
export default (dateFormat?: string): string => {
  if (dateFormat) {
    return `date|${dateFormat}`;
  }
  return "date";
};
