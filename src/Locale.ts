import { RuleType, LanguageType } from "./Types";
import en from "./i18n/en";

const TRANSLATIONS = {
  en,
};

export const loadTranslation = async (language: LanguageType) => {
  const result = await import(`./i18n/${language}`);
  console.log(result);
};

export const getMessage = (
  rule: RuleType,
  params: any[],
  language: LanguageType,
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
