/**
 * The field under validation may have alpha-numeric characters, as well as
 * dashes and underscores.
 *
 * @example
 *  import { alphaDash } from "robust-validator"
 *
 *  const definition = {
 *    value: [alphaDash()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#alpha-dash
 */
export default (): string => {
  return "alpha_dash";
};
