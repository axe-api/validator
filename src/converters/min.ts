/**
 * Validate that an attribute is at least a given size.
 *
 * @example
 *  import { min } from "robust-validator"
 *
 *  const definition = {
 *    value: [min(20)]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#min-value
 */
export default (value: number): string => {
  return `min:${value}`;
};
