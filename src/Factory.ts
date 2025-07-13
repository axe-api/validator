import { IRuleDefinition } from "./Interface";
import { RuleType } from "./Types";
import { DEFINED_RULES } from "./ruleManager";

export const toRuleDefinition = (rule: string): IRuleDefinition => {
  const [name, paramsAsString] = rule.split(":");

  const ruleType = name as RuleType;

  const params = paramsAsString ? paramsAsString.split(",") : [];

  const callback = DEFINED_RULES[ruleType];

  if (callback === undefined) {
    throw new Error(`Undefined validation rule: ${ruleType}`);
  }

  return {
    name: ruleType,
    callback,
    params,
  };
};
