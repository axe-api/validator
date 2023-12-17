import {
  RuleType,
  LanguageType,
  RuleFunction,
  ValidationResult,
} from "./Types";

export interface IRuleDefinition {
  name: RuleType;
  callback: RuleFunction;
  params: any[];
}

export interface IRuleResult {
  rule: RuleType;
  message: string;
}

export interface IValidationResult {
  isValid: boolean;
  isInvalid: boolean;
  fields: Record<string, boolean>;
  errors: ValidationResult;
}

export interface IContext {
  data: any;
  key: string;
}

export interface IOptions {
  stopOnFail: boolean;
  language: LanguageType;
  translations?: Record<string, string>;
}
