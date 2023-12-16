import { RuleType, SupportedLanguages } from "./Types";
import en from "./i18n/en.json";

const TRANSLATIONS = {
  en,
};

export const getMessage = (
  rule: RuleType,
  params: any[],
  language: SupportedLanguages,
  customTranslations: Record<string, string>
) => {
  const defaultTranslations = TRANSLATIONS[language];
  const translations = { ...defaultTranslations, ...customTranslations };
  let message = translations[rule];

  for (const index in params) {
    message = message.replace(`{${index}}`, params[index]);
  }

  return message;
};
