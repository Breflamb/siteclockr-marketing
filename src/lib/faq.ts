import { COUNTRIES, DEFAULT_COUNTRY, type CountryCode } from "@/lib/countries";
import { getMessages } from "@/lib/i18n";

export interface FaqItem {
  q: string;
  a: string;
}

/** FAQ copy — used by the FAQ section and JSON-LD (defaults to Ireland). */
export function getFaqs(country: CountryCode = DEFAULT_COUNTRY): FaqItem[] {
  const c = COUNTRIES[country];
  const m = getMessages(country);

  return [
    { q: m.faq.q1, a: m.faq.a1 },
    { q: m.faq.q2, a: m.faq.gpsAnswer(c.locationLookup) },
    { q: c.faqSafetyQ, a: c.faqSafetyA },
    { q: m.faq.q4, a: m.faq.a4 },
    { q: m.faq.q5, a: m.faq.a5 },
    { q: m.faq.q6, a: m.faq.a6 },
    { q: m.faq.q7, a: m.faq.a7 },
    { q: m.faq.q8, a: m.faq.a8 },
  ];
}
