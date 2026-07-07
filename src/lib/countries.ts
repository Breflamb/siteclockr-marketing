export type CountryCode = "IE" | "GB";

export const DEFAULT_COUNTRY: CountryCode = "IE";

export interface CountryContent {
  code: CountryCode;
  label: string;
  flag: string;

  // Safety card terminology
  safetyCard: string; // full name, e.g. "SafePass"
  safetyCardShort: string; // short, e.g. "SafePass" / "CSCS"

  // Hero
  heroSubhead: string;
  heroSafetyRowLabel: string; // label in the hero mock card

  // Features — safety card tile
  safetyFeatureTitle: string;
  safetyFeatureBody: string;

  // Compliance section
  complianceHeading: string;
  complianceIntro: string;
  compliancePoints: string[];
  complianceRegisterExpLabel: string; // e.g. "SafePass exp" / "CSCS exp"

  // "Under the hood" — address + themes tiles
  addressFeatureTitle: string;
  addressFeatureBody: string;
  themesFeatureBody: string;

  // Pricing
  pricingSafetyLine: string; // bullet used in Starter tier
  currencyNote: string;

  // FAQ — safety card question
  faqSafetyQ: string;
  faqSafetyA: string;
}

export const COUNTRIES: Record<CountryCode, CountryContent> = {
  IE: {
    code: "IE",
    label: "Ireland",
    flag: "🇮🇪",
    safetyCard: "SafePass",
    safetyCardShort: "SafePass",
    heroSubhead:
      "SiteClockr turns any phone into a site clock. GPS-geofenced check-ins, printable QR sign-in points, and SafePass & manual-handling tracking with automatic expiry reminders — plus a live on-site view and CSV payroll exports.",
    heroSafetyRowLabel: "SafePass",
    safetyFeatureTitle: "SafePass & manual handling",
    safetyFeatureBody:
      "Store card numbers, expiry dates and front/back photos. Snap the card and SiteClockr reads the SafePass number and expiry for you.",
    complianceHeading: "Never let an expired SafePass onto site again",
    complianceIntro:
      "SiteClockr keeps a live register of every worker's qualifications and warns you well before they lapse — protecting your team and your compliance record.",
    compliancePoints: [
      "Store SafePass number, expiry and front/back card photos against each worker",
      "Take a photo of the card and it reads the number and expiry for you",
      "Manual-handling certificates tracked the same way",
      "Automatic email reminders before anything expires",
      "See at a glance who is out of date before they reach the gate",
      "Every check-in is time-stamped and location-verified",
    ],
    complianceRegisterExpLabel: "SafePass exp",
    addressFeatureTitle: "Eircode address autofill",
    addressFeatureBody:
      "Set your company address in seconds from an Eircode, so it shows correctly on clock-in pages and QR printouts.",
    themesFeatureBody:
      "Brand every screen with your logo and a colour palette: 10 standard themes plus all 32 GAA county colours.",
    pricingSafetyLine: "SafePass & manual-handling tracking",
    currencyNote:
      "Prices shown in euro (EUR). Extra workers beyond your plan's included headcount are billed at €1.50 per active worker per month.",
    faqSafetyQ: "How is SafePass tracked?",
    faqSafetyA:
      "You store each worker's SafePass number, expiry and photos of the card. Taking a photo of the card reads the number and expiry for you, and SiteClockr emails reminders before it lapses. Manual-handling certificates are tracked the same way.",
  },
  GB: {
    code: "GB",
    label: "Britain",
    flag: "🇬🇧",
    safetyCard: "CSCS card",
    safetyCardShort: "CSCS",
    heroSubhead:
      "SiteClockr turns any phone into a site clock. GPS-geofenced check-ins, printable QR sign-in points, and CSCS card & manual-handling tracking with automatic expiry reminders — plus a live on-site view and CSV payroll exports.",
    heroSafetyRowLabel: "CSCS",
    safetyFeatureTitle: "CSCS & manual handling",
    safetyFeatureBody:
      "Store card numbers, expiry dates and front/back photos against every worker, with automatic reminders before they expire.",
    complianceHeading: "Never let an expired CSCS card onto site again",
    complianceIntro:
      "SiteClockr keeps a live register of every worker's qualifications and warns you well before they lapse — protecting your team and your compliance record.",
    compliancePoints: [
      "Store CSCS card number, expiry and front/back card photos against each worker",
      "Snap the card and upload it, then confirm the details",
      "Manual-handling certificates tracked the same way",
      "Automatic email reminders before anything expires",
      "See at a glance who is out of date before they reach the gate",
      "Every check-in is time-stamped and location-verified",
    ],
    complianceRegisterExpLabel: "CSCS exp",
    addressFeatureTitle: "UK postcode support",
    addressFeatureBody:
      "Enter your company address with UK postcode formatting, so it shows correctly on clock-in pages and QR printouts.",
    themesFeatureBody:
      "Brand every screen with your logo and a choice of colour palettes to match your company.",
    pricingSafetyLine: "CSCS & manual-handling tracking",
    currencyNote:
      "Prices shown in euro (EUR) and billed in euro — your bank converts to GBP. Extra workers beyond your plan's included headcount are billed at €1.50 per active worker per month.",
    faqSafetyQ: "How is CSCS tracked?",
    faqSafetyA:
      "You store each worker's CSCS card number, expiry and photos of the card. Upload a photo and confirm the details, and SiteClockr emails reminders before it lapses. Manual-handling certificates are tracked the same way.",
  },
};

export const COUNTRY_LIST: CountryContent[] = [COUNTRIES.IE, COUNTRIES.GB];
