import { getValueViaPath } from "../Helpers";
import { IContext } from "../Interface";

export default (value: any, context: IContext): boolean => {
  const confirmedKey = `${context.key}_confirmed`;
  const confirmedValue = getValueViaPath(context.data, confirmedKey);
  return value === confirmedValue;
};
