/**
 * The field under validation must not be included in the given list of values.
 *
 * @example
 *  import { notIncludes } from "robust-validator"
 *
 *  const definition = {
 *    value: [notIncludes(["apple", "orange"])]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#not-includes-foo-bar
 */
export default (items: string[]): string => {
  return `not_includes:${items.join(",")}`;
};
