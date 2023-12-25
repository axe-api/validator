export default (dateFormat?: string): string => {
  if (dateFormat) {
    return `date|${dateFormat}`;
  }
  return "date";
};
