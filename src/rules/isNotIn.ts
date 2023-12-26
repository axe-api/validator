export default (value: any, list: any[]): boolean => {
  if (value === null || value === undefined) {
    return false;
  }

  const listAsString = list.map((item) => String(item).trim());

  if (Array.isArray(value)) {
    // Check if all elements in the array are in the list
    return value.every(
      (item: any) => !listAsString.includes(String(item).trim())
    );
  }

  // Check if the string value is in the list
  return !listAsString.includes(String(value).trim());
};
