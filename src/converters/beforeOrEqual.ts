/**
 * The field under validation must be before or equal to the given date.
 *
 * @example
 *  import { beforeOrEqual } from "robust-validator"
 *
 *  const definition = {
 *    value: [beforeOrEqual("2023-01-01")]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#before-or-equal-date
 */
export default (date: string): string => {
  return `before_or_equal:${date}`;
};
