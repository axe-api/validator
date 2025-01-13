import {
  RuleType,
  LanguageType,
  RuleFunction,
  ValidationResult,
  Translation,
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
  field: string;
  definition: string;
}

export interface IOptions {
  stopOnFail: boolean;
  language: LanguageType;
  dateFormat: string;
}

export interface IValidationOptions extends IOptions {
  translations?: Record<string, string>;
}

export interface ILocale {
  key: LanguageType;
  values: Translation;
}

export interface ITraversePair {
  path: string;
  value: any;
}

export interface ITraverseItem {
  path: string;
  rules: string | string[];
  resolved: Array<ITraversePair>;
}
