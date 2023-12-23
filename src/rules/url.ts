export default (value: any): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(value);
};
