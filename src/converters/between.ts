/**
 * The field under validation must have a size between the given min and max.
 * Strings, and numerics are evaluated in the same fashion as the size rule.
 *
 * @example
 *  import { between } from "robust-validator"
 *
 *  const definition = {
 *    value: [between(5, 10)]
 *  };
 * @type {string}
 * @tutorial https://validator.axe-api.com/rules.html#between-min-max
 */
export default (min: number, max: number): string => {
  return `between:${min},${max}`;
};
