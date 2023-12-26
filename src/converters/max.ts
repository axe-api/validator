/**
 * Validate that an attribute is no greater than a given size
 *
 * @example
 *  import { max } from "robust-validator"
 *
 *  const definition = {
 *    value: [max(20)]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#max-value
 */
export default (value: number): string => {
  return `max:${value}`;
};
