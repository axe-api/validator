import { RuleType, ValidationFunction } from "./Types";
import rules from "./Rules";

export const RULE_FUNCTION_MAPS: Record<RuleType, ValidationFunction> = {
  required: rules.required,
  email: rules.required,
  min: rules.min,
};
