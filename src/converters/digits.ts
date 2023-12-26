/**
 * The field under validation must be numeric and must have an exact length of
 * value.
 *
 * @example
 *  import { digits } from "robust-validator"
 *
 *  const definition = {
 *    value: [digits(4)]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#digits-value
 */
export default (length: number): string => {
  return `digits:${length}`;
};
