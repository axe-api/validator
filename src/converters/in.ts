export default (items: string[]): string => {
  return `in:${items.join(",")}`;
};
