export default (value: any, size: any): boolean => {
  if (value === null || value === undefined) {
    return false;
  }

  const check = Number(size);

  if (size === null || size === undefined || isNaN(check)) {
    throw new Error(`Incorrect validation rule: max:number`);
  }

  if (typeof value === "string") {
    return value.trim().length <= check;
  }

  const input = Number(value);

  if (isNaN(input)) {
    return false;
  }

  return input <= check;
};
