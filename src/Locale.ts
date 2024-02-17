import { ILocale } from "./Interface";
import { RuleType, LanguageType } from "./Types";

const TRANSLATIONS: Partial<Record<LanguageType, Record<string, string>>> = {};

export const setLocales = (values: ILocale[] | ILocale) => {
  if (Array.isArray(values)) {
    const locales = values as ILocale[];
    for (const item of locales) {
      mergeTranslations(item);
    }
  } else {
    const locale = values as ILocale;
    mergeTranslations(locale);
  }
};

const mergeTranslations = (locale: ILocale) => {
  if (TRANSLATIONS[locale.key]) {
    TRANSLATIONS[locale.key] = {
      ...TRANSLATIONS[locale.key],
      ...locale.values,
    };
  } else {
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
  if (!TRANSLATIONS[locale]) {
    TRANSLATIONS[locale] = {};
  }

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
  customTranslations: Record<string, string> = {}
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
