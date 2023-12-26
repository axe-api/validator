/**
 * The field under validation must be numeric and must have length between
 * given min and max.
 *
 * @example
 *  import { digitsBetween } from "robust-validator"
 *
 *  const definition = {
 *    value: [digitsBetween(4, 6)]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#digits-between-min-max
 */
export default (min: number, max: number): string => {
  return `digits_between:${min},${max}`;
};
