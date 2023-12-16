import {
  RuleType,
  SupportedLanguages,
  ValidationFunction,
  ValidationResult,
} from "./Types";

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
  fields: Record<string, boolean>;
  errors: ValidationResult;
}

export interface IContext {
  data: any;
  key: string;
}

export interface IOptions {
  stopOnFail: boolean;
  language: SupportedLanguages;
  translations?: Record<string, string>;
}
