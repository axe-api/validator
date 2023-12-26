/**
 * The field unter validation must be after or equal to the given field
 *
 * @example
 *  import { afterOrEqual } from "robust-validator"
 *
 *  const definition = {
 *    value: [afterOrEqual("2023-01-01")]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#after-or-equal-date
 */
export default (date: string): string => {
  return `after_or_equal:${date}`;
};
