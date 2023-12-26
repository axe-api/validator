/**
 * The field under validation should be a hexadecimal format.
 *
 * @example
 *  import { hex } from "robust-validator"
 *
 *  const definition = {
 *    value: [hex()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#hex
 */
export default (): string => {
  return "hex";
};
