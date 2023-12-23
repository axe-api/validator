import { ILocale } from "./Interface";
import { RuleType, LanguageType, Translation } from "./Types";

const TRANSLATIONS: Partial<Record<LanguageType, Translation>> = {};

export const setLocales = async (json: any) => {
  if (Array.isArray(json)) {
    const locales = json as ILocale[];
    for (const item of locales) {
      TRANSLATIONS[item.key] = item.values;
    }
  } else {
    const locale = json as ILocale;
    TRANSLATIONS[locale.key] = locale.values;
  }
};

export const getMessage = async (
  rule: RuleType,
  params: any[],
  language: LanguageType,
  customTranslations: Record<string, string>
) => {
  const defaultTranslations = TRANSLATIONS[language];
  if (defaultTranslations === undefined) {
    throw new Error(`You should set locale first: setLocales(["${language}"])`);
  }

  const translations = { ...defaultTranslations, ...customTranslations };
  let message = translations[rule];

  if (message === undefined) {
    throw new Error(`Undefined error message: ${rule} (${language})`);
  }

  for (const index in params) {
    message = message.replace(`{${index}}`, params[index]);
  }

  return message;
};
