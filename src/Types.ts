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
  | "includes"
  | "integer"
  | "max"
  | "min"
  | "not_includes"
  | "numeric"
  | "required"
  | "size"
  | "string"
  | "url";

export type RuleFunction = (...args: any[]) => Promise<boolean> | boolean;

export type ValidationResult = Record<string, IRuleResult[]>;

export type LanguageType =
  | "ar"
  | "az"
  | "be"
  | "bg"
  | "bs"
  | "ca"
  | "cs"
  | "cy"
  | "da"
  | "de"
  | "el"
  | "en"
  | "es"
  | "et"
  | "eu"
  | "fa"
  | "fi"
  | "fr"
  | "hr"
  | "hu"
  | "id"
  | "it"
  | "ja"
  | "ka"
  | "ko"
  | "li"
  | "lt"
  | "lv"
  | "mk"
  | "mn"
  | "ms"
  | "no"
  | "nl"
  | "pl"
  | "pt"
  | "ro"
  | "ru"
  | "se"
  | "sl"
  | "sq"
  | "sr"
  | "sv"
  | "tr"
  | "uk"
  | "vi"
  | "zh";

export type Translation = Partial<Record<RuleType, string>>;

export type Definition = Record<string, string | string[]>;

export type InputResultType = "valid" | "invalid" | "fail";
