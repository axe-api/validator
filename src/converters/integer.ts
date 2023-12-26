/**
 * The field under validation must have an integer value.
 *
 * @example
 *  import { integer } from "robust-validator"
 *
 *  const definition = {
 *    value: [integer()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#integer
 */
export default (): string => {
  return "integer";
};
