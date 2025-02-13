import { RULE_FUNCTION_MAPS } from "./Constants";
import { addCustomLocale } from "./Locale";
import { LanguageType, RuleFunction } from "./Types";

export const DEFINED_RULES: Record<string, RuleFunction> = {
  ...RULE_FUNCTION_MAPS,
};

export const isRegistered = (name: string) => {
  return Object.keys(DEFINED_RULES).includes(name);
};

export const register = (
  name: string,
  ruleFunction: RuleFunction,
  translations: Partial<Record<LanguageType, string>>
) => {
  if (DEFINED_RULES[name]) {
    throw new Error(`The rule name is already defined: ${name}`);
  }

  for (const locale of Object.keys(translations)) {
    const message = translations[locale as LanguageType];
    if (message === undefined) {
      throw new Error(
        `The custom rule translation should be provided: ${locale}`
      );
    }

    addCustomLocale(locale as LanguageType, name, message);
  }

  DEFINED_RULES[name] = ruleFunction;
};
