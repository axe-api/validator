import { IOptions } from "./Interface";

const DEFAULT_OPTIONS: IOptions = {
  stopOnFail: false,
  language: "en",
  dateFormat: "yyyy-MM-dd",
};

let OPTIONS: IOptions = {
  ...DEFAULT_OPTIONS,
};

export const getOptions = () => {
  return OPTIONS;
};

export const setOptions = async (value: Partial<IOptions>) => {
  OPTIONS = {
    ...OPTIONS,
    ...value,
  };
};
