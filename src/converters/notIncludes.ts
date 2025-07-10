/**
 * The field under validation must not be included in the given list of values.
 *
 * @example
 *  import { notIn } from "robust-validator"
 *
 *  const definition = {
 *    value: [notIn(["apple", "orange"])]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#not-in-foo-bar
 */
export default (items: string[]): string => {
  return `not_includes:${items.join(",")}`;
};
