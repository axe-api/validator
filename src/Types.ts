import { IRuleResult } from "./Interface";

export type RuleType =
  | "accepted"
  | "after"
  | "after_or_equal"
  | "alpha"
  | "alpha_dash"
  | "alpha_num"
  | "array"
  | "before"
  | "before_or_equal"
  | "between"
  | "boolean"
  | "confirmed"
  | "date"
  | "digits"
  | "digits_between"
  | "email"
  | "hex"
  | "in"
  | "integer"
  | "max"
  | "min"
  | "not_in"
  | "numeric"
  | "required"
  | "size"
  | "string"
  | "url";

export type RuleFunction = (...args: any[]) => boolean;

export type ValidationResult = Record<string, IRuleResult[]>;

export type LanguageType = "ar" | "az" | "be" | "en" | "tr";

export type Translation = Record<RuleType, string>;
