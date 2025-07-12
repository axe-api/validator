import isIncludes from "./isIncludes";

export default (
  value: string | number | null | undefined,
  ...args: unknown[]
): boolean => {
  if (value === undefined || value === null) {
    return true;
  }

  return !isIncludes(value, args);
};
