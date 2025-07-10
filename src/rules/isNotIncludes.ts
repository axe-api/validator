import isIncludes from "./isIncludes";

export default (value: unknown, options: string): boolean => {
  if (value === undefined || value === null) {
    return false;
  }

  return !isIncludes(value, options);
};
