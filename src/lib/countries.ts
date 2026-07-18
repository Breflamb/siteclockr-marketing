export type CountryCode = "IE" | "GB" | "FR";

export const DEFAULT_COUNTRY: CountryCode = "IE";

export interface CountryContent {
  code: CountryCode;
  label: string;
  flag: string;

  // Safety card terminology
  safetyCard: string; // full name, e.g. "SafePass"
  safetyCardShort: string; // short, e.g. "SafePass" / "CSCS"

  // Site geofence location lookup, e.g. "an Eircode" / "a UK postcode"
  locationLookup: string;

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
    locationLookup: "an Eircode",
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
    addressFeatureTitle: "Eircode-powered setup",
    addressFeatureBody:
      "Autofill your company address and drop a site's geofence straight from an Eircode — no fiddling with coordinates.",
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
    locationLookup: "a UK postcode",
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
    addressFeatureTitle: "Postcode & map setup",
    addressFeatureBody:
      "Set a site's geofence straight from a UK postcode or by dropping a pin on the map — then just set the radius.",
    themesFeatureBody:
      "Brand every screen with your logo and a choice of colour palettes to match your company.",
    pricingSafetyLine: "CSCS & manual-handling tracking",
    currencyNote:
      "Prices shown in euro (EUR) and billed in euro — your bank converts to GBP. Extra workers beyond your plan's included headcount are billed at €1.50 per active worker per month.",
    faqSafetyQ: "How is CSCS tracked?",
    faqSafetyA:
      "You store each worker's CSCS card number, expiry and photos of the card. Upload a photo and confirm the details, and SiteClockr emails reminders before it lapses. Manual-handling certificates are tracked the same way.",
  },
  FR: {
    code: "FR",
    label: "France",
    flag: "🇫🇷",
    safetyCard: "carte BTP",
    safetyCardShort: "carte BTP",
    locationLookup: "un code postal",
    heroSubhead:
      "SiteClockr transforme n'importe quel téléphone en pointeuse de chantier. Pointages géolocalisés, QR imprimables, suivi des cartes BTP et habilitations manutention avec rappels d'expiration automatiques — plus une vue en direct sur le chantier et des exports CSV paie.",
    heroSafetyRowLabel: "Carte BTP",
    safetyFeatureTitle: "Carte BTP & manutention",
    safetyFeatureBody:
      "Stockez numéros, dates d'expiration et photos recto/verso. Photographiez la carte et SiteClockr lit le numéro et la date d'expiration pour vous.",
    complianceHeading: "Plus jamais de carte BTP expirée sur le chantier",
    complianceIntro:
      "SiteClockr tient un registre à jour des qualifications de chaque ouvrier et vous alerte bien avant expiration — pour protéger votre équipe et votre conformité.",
    compliancePoints: [
      "Numéro carte BTP, expiration et photos recto/verso par ouvrier",
      "Photographiez la carte pour lire numéro et date d'expiration",
      "Certificats de manutention suivis de la même façon",
      "Rappels e-mail automatiques avant toute expiration",
      "Voyez d'un coup d'œil qui n'est plus à jour avant l'entrée du chantier",
      "Chaque pointage est horodaté et vérifié par la position",
    ],
    complianceRegisterExpLabel: "Carte BTP exp.",
    addressFeatureTitle: "Configuration par code postal",
    addressFeatureBody:
      "Remplissez l'adresse de l'entreprise et placez le géorepérage d'un chantier directement depuis un code postal — sans manipuler les coordonnées.",
    themesFeatureBody:
      "Personnalisez chaque écran avec votre logo et une palette de couleurs pour correspondre à votre entreprise.",
    pricingSafetyLine: "Suivi carte BTP & manutention",
    currencyNote:
      "Tarifs affichés en euro (EUR). Les ouvriers au-delà du quota inclus sont facturés 1,50 € par ouvrier actif et par mois.",
    faqSafetyQ: "Comment la carte BTP est-elle suivie ?",
    faqSafetyA:
      "Vous enregistrez le numéro, la date d'expiration et les photos de la carte BTP de chaque ouvrier. Une photo de la carte lit le numéro et l'expiration pour vous, et SiteClockr envoie des rappels avant expiration. Les certificats de manutention sont suivis de la même manière.",
  },
};

export const COUNTRY_LIST: CountryContent[] = [COUNTRIES.IE, COUNTRIES.GB, COUNTRIES.FR];
