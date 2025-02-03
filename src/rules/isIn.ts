export default (value: any, ...options: any): boolean => {
  // support calls by "validate()" which uses spreading to pass all options.
  // This behavior is different compared to standalone usage of this function.
  if (options.length === 1) {
    options = options[0]
  }

  const list: any[] = Array.isArray(options) ? options : options.split(",");
  const listAsString = list.map((item) => String(item).trim());

  if (Array.isArray(value)) {
    // Check if all elements in the array are in the list
    return value.every((item: any) =>
      listAsString.includes(String(item).trim())
    );
  }

  // Check if the string value is in the list
  return listAsString.includes(String(value).trim());
};
