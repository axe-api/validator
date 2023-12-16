import { IOptions } from "./Interface";
import { DEFAULT_OPTIONS } from "./Constants";

let OPTIONS: IOptions = {
  ...DEFAULT_OPTIONS,
};

export const getOptions = () => {
  return OPTIONS;
};

export const setOptions = (value: Partial<IOptions>) => {
  OPTIONS = {
    ...OPTIONS,
    ...value,
  };
};
