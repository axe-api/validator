import { RuleType, ValidationFunction, ValidationResult } from "./Types";

export interface IRuleDefinition {
  name: RuleType;
  callback: ValidationFunction;
  params: any[];
}

export interface IRuleResult {
  rule: RuleType;
  message: string;
}

export interface IValidationResult {
  isValid: boolean;
  isInvalid: boolean;
  data: ValidationResult;
}
