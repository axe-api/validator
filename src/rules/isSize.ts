export default (value: any, size: any): boolean => {
  if (value === null || value === undefined) {
    return false;
  }

  if (isNaN(Number(size))) {
    throw new Error(`Invalid validation rule: size:${size} (size:number)`);
  }

  if (typeof value === "string") {
    return String(value).trim().length === Number(size);
  }

  return value === Number(size);
};
