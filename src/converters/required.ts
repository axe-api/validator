/**
 * The value should be defined. null, undefined or empty strings are not
 * acceptable.
 *
 * @example
 *  import { required } from "robust-validator"
 *
 *  const definition = {
 *    value: [required()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#required
 */
export default (): string => {
  return "required";
};
