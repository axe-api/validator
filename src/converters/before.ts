/**
 * The field under validation must be before the given date.
 *
 * @example
 *  import { before } from "robust-validator"
 *
 *  const definition = {
 *    value: [before("2023-01-01")]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#before-date
 */
export default (date: string): string => {
  return `before:${date}`;
};
