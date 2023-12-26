/**
 * Validate that an attribute is numeric. The string representation of a number
 * will pass.
 *
 * @example
 *  import { numeric } from "robust-validator"
 *
 *  const definition = {
 *    value: [numeric()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#numeric
 */
export default (): string => {
  return "numeric";
};
