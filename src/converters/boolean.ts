/**
 * The field under validation must be a boolean value of the form true, false,
 * 0, 1, 'true', 'false', '0', '1',
 *
 * @example
 *  import { boolean } from "robust-validator"
 *
 *  const definition = {
 *    value: [boolean()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#boolean
 */
export default (): string => {
  return "boolean";
};
