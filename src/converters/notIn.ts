export default (items: string[]): string => {
  return `not_in:${items.join(",")}`;
};
