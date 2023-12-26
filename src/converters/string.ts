/**
 * The field under validation must be a string.
 *
 * @example
 *  import { string } from "robust-validator"
 *
 *  const definition = {
 *    value: [string()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#string
 */
export default (): string => {
  return "string";
};
