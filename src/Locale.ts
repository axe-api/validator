import { RuleType, LanguageType, Translation } from "./Types";

const TRANSLATIONS: Partial<Record<LanguageType, Translation>> = {};

export const setLocales = async (languages: LanguageType[]) => {
  for (const language of languages) {
    const { default: values } = await import(`./i18n/${language}`);
    TRANSLATIONS[language] = values;
  }
};

export const getMessage = async (
  rule: RuleType,
  params: any[],
  language: LanguageType,
  customTranslations: Record<string, string>
) => {
  if (Object.keys(TRANSLATIONS).length === 0) {
    await setLocales(["en"]);
  }

  const defaultTranslations = TRANSLATIONS[language];
  if (defaultTranslations === undefined) {
    throw new Error(
      `You should load the translations first: await loadTranslation(["${language}"])`
    );
  }

  const translations = { ...defaultTranslations, ...customTranslations };
  let message = translations[rule];

  for (const index in params) {
    message = message.replace(`{${index}}`, params[index]);
  }

  return message;
};
