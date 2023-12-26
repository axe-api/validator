import { getValueViaPath } from "../helpers/getValueViaPath";
import { IContext } from "../Interface";

export default (value: any, context: IContext): boolean => {
  const confirmedKey = `${context.field}_confirmed`;
  const confirmedValue = getValueViaPath(context.data, confirmedKey);
  return value === confirmedValue;
};
