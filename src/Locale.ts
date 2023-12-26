import { ILocale } from "./Interface";
import { RuleType, LanguageType } from "./Types";

const TRANSLATIONS: Partial<Record<LanguageType, Record<string, string>>> = {};

export const setLocales = (json: any) => {
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

export const getLoadedLocales = () => {
  return Object.keys(TRANSLATIONS);
};

export const addCustomLocale = (
  locale: LanguageType,
  ruleName: string,
  translation: string
) => {
  const root = TRANSLATIONS[locale];

  if (root) {
    root[ruleName] = translation;
  } else {
    throw new Error(`The translation path couldn't find: ${locale}`);
  }
};

export const getMessage = (
  rule: RuleType,
  params: any[],
  language: LanguageType,
  customTranslations: Record<string, string>
) => {
  const defaultTranslations = TRANSLATIONS[language];
  if (defaultTranslations === undefined) {
    throw new Error(`You should set locale: setLocales(["${language}"])`);
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
