import type { CountryCode } from "@/lib/countries";
import { en } from "./en";
import { fr } from "./fr";
import type { Locale, Messages } from "./types";

export type { Locale, Messages };

const MESSAGES: Record<Locale, Messages> = { en, fr };

/** Map each country/market to its UI language. */
export const LOCALE_BY_COUNTRY: Record<CountryCode, Locale> = {
  IE: "en",
  GB: "en",
  FR: "fr",
};

export const HTML_LANG_BY_COUNTRY: Record<CountryCode, string> = {
  IE: "en-IE",
  GB: "en-GB",
  FR: "fr-FR",
};

export function localeFromCountry(country: CountryCode): Locale {
  return LOCALE_BY_COUNTRY[country];
}

export function getMessages(country: CountryCode): Messages {
  return MESSAGES[localeFromCountry(country)];
}

export function getMessagesByLocale(locale: Locale): Messages {
  return MESSAGES[locale];
}
