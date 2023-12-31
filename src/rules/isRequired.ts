export default (value: any): boolean => {
  if (value === null || value === undefined) {
    return false;
  }

  if (Array.isArray(value)) {
    return true;
  }

  const content = String(value).trim();
  return content.length > 0;
};
