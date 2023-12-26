/**
 * The field under validation must be entirely alpha-numeric characters.
 *
 * @example
 *  import { alphaNum } from "robust-validator"
 *
 *  const definition = {
 *    value: [alphaNum()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#alpha-num
 */
export default (): string => {
  return "alpha_num";
};
