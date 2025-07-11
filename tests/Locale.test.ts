import { describe, test, expect } from "vitest";
import { LanguageType } from "../src/Types";
import { ILocale } from "../src/Interface";
import { setLocales } from "../src/Locale";

const LANGUAGES: Record<LanguageType, string> = {
  ar: "ar",
  az: "az",
  be: "be",
  bg: "bg",
  bs: "bs",
  ca: "ca",
  cs: "cs",
  cy: "cy",
  da: "da",
  de: "de",
  el: "el",
  en: "en",
  es: "es",
  et: "et",
  eu: "eu",
  fa: "fa",
  fi: "fi",
  fr: "fr",
  hr: "hr",
  hu: "hu",
  id: "id",
  it: "it",
  ja: "ja",
  ka: "ka",
  ko: "ko",
  li: "li",
  lt: "lt",
  lv: "lv",
  mk: "mk",
  mn: "mn",
  ms: "ms",
  no: "no",
  nl: "nl",
  pl: "pl",
  pt: "pt",
  ro: "ro",
  ru: "ru",
  se: "se",
  sl: "sl",
  sq: "sq",
  sr: "sr",
  sv: "sv",
  tr: "tr",
  uk: "uk",
  vi: "vi",
  zh: "zh",
};

describe("Locale helpers", () => {
  test("setLocales() should be able to load all supported languages", async () => {
    expect(true).toBe(true);
    for (const language of Object.keys(LANGUAGES)) {
      const content = await import(`../src/i18n`);
      const locale = content[language] as ILocale;
      expect(locale.key).toBe(language);
      setLocales(locale);
    }
  });
});
