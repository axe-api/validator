/**
 * The field under validation must be included in the given list of values.
 * The field can be an array or string.
 *
 * @example
 *  import { in } from "robust-validator"
 *
 *  const definition = {
 *    value: [in(["apple", "orange"])]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#in-foo-bar
 */
export default (items: string[]): string => {
  return `in:${items.join(",")}`;
};
