export const getValuesViaPath = (data: any, path: string): any[] => {
  const pathParts = path.split("."); // Split the path by '.'

  // Recursive function to walk through the data and extract values based on the current path part
  const getValues = (currentData: any, remainingPath: string[]): any[] => {
    const [currentPart, ...restOfPath] = remainingPath;

    if (currentPart === undefined) {
      // If there's no more path left, return the current data as an array
      return [currentData];
    }

    if (currentPart === "*") {
      if (Array.isArray(currentData)) {
        // If '*' and the current data is an array, iterate over it and recurse for each element
        return currentData.flatMap((item) => getValues(item, restOfPath));
      } else {
        // '*' found but data isn't an array, return undefined
        return [undefined];
      }
    }

    if (
      typeof currentData === "object" &&
      currentData !== null &&
      currentPart in currentData
    ) {
      // Continue recursively if the current part is a valid key in the object
      return getValues(currentData[currentPart], restOfPath);
    } else {
      // Key doesn't exist in the object
      return [undefined];
    }
  };

  // Start the recursion with the entire data object and path parts
  return getValues(data, pathParts);
};
