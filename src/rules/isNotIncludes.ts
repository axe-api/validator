import isIncludes from "./isIncludes";

export default (value: unknown, ...args: unknown[]): boolean => {
  if (value === undefined || value === null) {
    return false;
  }

  return !isIncludes(value, args);
};
