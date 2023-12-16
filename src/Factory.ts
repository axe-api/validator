import { RULE_FUNCTION_MAPS } from "./Constants";
import { IRuleDefinition } from "./Interface";
import { RuleType } from "./Types";

export const toRuleDefinition = (rule: string): IRuleDefinition => {
  const [name, paramsAsString] = rule.split(":");
  const ruleType = toRuleType(name);

  const params = paramsAsString ? paramsAsString.split(",") : [];

  return {
    name: ruleType,
    callback: RULE_FUNCTION_MAPS[ruleType],
    params,
  };
};

export const toRuleType = (name: string): RuleType => {
  try {
    return name as RuleType;
  } catch (error) {
    throw new Error(`Undefined rule: ${name}`);
  }
};
