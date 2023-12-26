/**
 * The field under validation must be yes, on, 1 or true. This is useful for
 * validating "Terms of Service" acceptance.
 *
 * @example
 *  import { accepted } from "robust-validator"
 *
 *  const definition = {
 *    value: [accepted()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#accepted
 */
export default (): string => {
  return "accepted";
};
