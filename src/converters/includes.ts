/**
 * Converts an array of strings into a comma-separated string prefixed with "includes:".
 *
 * @param {string[]} items - The array of strings to be joined.
 * @returns {string} The formatted string in the form "includes:item1,item2,...".
 */
export default (items: string[]): string => {
  return `includes:${items.join(",")}`;
};
