/**
 * The field under validation must be after the given date.
 *
 * @example
 *  import { after } from "robust-validator"
 *
 *  const definition = {
 *    value: [after("2023-01-01")]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#after-date
 */
export default (date: string): string => {
  return `after:${date}`;
};
