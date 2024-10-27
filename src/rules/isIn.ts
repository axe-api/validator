export default (value: any, options: any[] | string): boolean => {
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
