/**
 * Validate that an attribute has a valid URL format
 *
 * @example
 *  import { url } from "robust-validator"
 *
 *  const definition = {
 *    value: [url()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#url
 */
export default (): string => {
  return "url";
};
