/**
 * The field under validation must have a size matching the given value.
 * For string data, value corresponds to the number of characters. For numeric
 * data, value corresponds to a given integer value.
 *
 * @example
 *  import { size } from "robust-validator"
 *
 *  const definition = {
 *    value: [size(10)]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#size-value
 */
export default (value: number): string => {
  return `size:${value}`;
};
