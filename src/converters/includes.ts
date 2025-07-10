/**
 * Converts an array of strings into a comma-separated string prefixed with "in:".
 *
 * @param {string[]} items - The array of strings to be joined.
 * @returns {string} The formatted string in the form "in:item1,item2,...".
 */
export default (items: string[]): string => {
  return `includes:${items.join(",")}`;
};
