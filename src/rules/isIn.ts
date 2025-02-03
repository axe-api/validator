export default (value: any, ...args: any[]): boolean => {
  // Let's check the last item is IContext
  const lastItem: any = args.at(-1);
  if (lastItem.definition && lastItem.field) {
    args.pop();
  }

  const [options] = args;

  const list: any[] = Array.isArray(options)
    ? options
    : (options as string).split(",");
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
