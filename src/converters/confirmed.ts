/**
 * The field under validation must have a matching field of foo_confirmed.
 * For example, if the field under validation is password, a matching
 * password_confirmed field must be present in the input.
 *
 * @example
 *  import { confirmed } from "robust-validator"
 *
 *  const definition = {
 *    value: [confirmed()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#confirmed
 */
export default (): string => {
  return "confirmed";
};
