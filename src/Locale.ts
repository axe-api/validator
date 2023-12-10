import { RuleType } from "./Types";
import * as en from "./Locale/en.json";

export const getMessage = (rule: RuleType, params: any[]) => {
  let message = en[rule];

  for (const index in params) {
    message = message.replace(`{${index}}`, params[index]);
  }

  return message;
};
