/**
 * The field under validation must be an array.
 *
 * @example
 *  import { array } from "robust-validator"
 *
 *  const definition = {
 *    value: [array()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#array
 */
export default (): string => {
  return "array";
};
