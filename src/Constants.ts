import { RuleType, RuleFunction } from "./Types";
import rules from "./Rules";
import { IOptions } from "./Interface";

export const RULE_FUNCTION_MAPS: Record<RuleType, RuleFunction> = {
  string: rules.string,
  boolean: rules.boolean,
  accepted: rules.accepted,
  after: rules.after,
  after_or_equal: rules.afterOrEqual,
  alpha: rules.alpha,
  alpha_dash: rules.alphaDash,
  alpha_num: rules.alphaNum,
  array: rules.array,
  before: rules.before,
  before_or_equal: rules.beforeOrEqual,
  between: rules.between,
  confirmed: rules.confirmed,
  date: rules.date,
  digits: rules.digits,
  digits_between: rules.digitsBetween,
  email: rules.email,
  hex: rules.hex,
  in: rules.in,
  integer: rules.integer,
  max: rules.max,
  min: rules.min,
  not_in: rules.notIn,
  numeric: rules.numeric,
  required: rules.required,
  size: rules.size,
  url: rules.url,
};

export const DEFAULT_OPTIONS: IOptions = {
  stopOnFail: false,
  language: "en",
  translations: {},
};
