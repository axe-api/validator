/**
 * The field under validation must be formatted as an e-mail address.
 *
 * @example
 *  import { email } from "robust-validator"
 *
 *  const definition = {
 *    value: [email()]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#email
 */
export default (): string => {
  return "email";
};
