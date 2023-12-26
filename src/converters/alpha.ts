/**
 * The field under validation must be entirely alphabetic characters.
 *
 * @example
 *  import { alpha } from "robust-validator"
 *
 *  const definition = {
 *    value: [alpha()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#alpha
 */
export default (): string => {
  return "alpha";
};
