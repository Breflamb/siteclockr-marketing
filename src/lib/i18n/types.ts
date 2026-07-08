export type Locale = "en" | "fr";

export interface NavItem {
  label: string;
  href: string;
}

export interface Messages {
  locale: Locale;
  htmlLang: string;

  nav: NavItem[];

  header: {
    blog: string;
    contact: string;
    login: string;
    startFree: string;
    openMenu: string;
    chooseCountry: string;
    homeAria: string;
  };

  footer: {
    product: string;
    company: string;
    privacy: string;
    gdpr: string;
    copyright: (year: number, name: string) => string;
    madeIn: string;
    description: string;
  };

  hero: {
    eyebrow: string;
    h1Line1: string;
    h1Highlight: string;
    ctaStart: string;
    ctaHow: string;
    bullets: [string, string, string];
    mockCurrentlyOnSite: string;
    mockClockedInCount: string;
    mockSiteName: string;
    mockSiteLocation: string;
    mockOnSite: string;
    mockClockedInLabel: string;
    mockGeofence: string;
    mockManualHandling: string;
    mockValidExp: string;
    mockValidExp2: string;
    mockThisWeek: string;
    mockWeekHours: string;
  };

  features: {
    eyebrow: string;
    heading: string;
    intro: string;
    gpsTitle: string;
    gpsBody: (locationLookup: string) => string;
    qrTitle: string;
    qrBody: string;
    liveTitle: string;
    liveBody: string;
    expiryTitle: string;
    expiryBody: (safetyCardShort: string) => string;
    timesheetsTitle: string;
    timesheetsBody: string;
  };

  howItWorks: {
    eyebrow: string;
    heading: string;
    intro: string;
    step1Title: string;
    step1Body: (locationLookup: string) => string;
    step2Title: string;
    step2Body: (safetyCardShort: string) => string;
    step3Title: string;
    step3Body: string;
  };

  compliance: {
    eyebrow: string;
    cta: string;
    registerTitle: string;
    statusValid: string;
    statusExpiring: string;
    workers: { name: string; role: string }[];
  };

  moreFeatures: {
    eyebrow: string;
    heading: string;
    intro: string;
    abuseTitle: string;
    abuseBody: string;
    apiTitle: string;
    apiBody: string;
    multiTitle: string;
    multiBody: string;
    portalTitle: string;
    portalBody: string;
    manualTitle: string;
    manualBody: string;
    backupTitle: string;
    backupBody: string;
    coloursTitle: string;
  };

  pricing: {
    eyebrow: string;
    heading: string;
    intro: string;
    mostPopular: string;
    soleTrader: {
      name: string;
      price: string;
      period: string;
      blurb: string;
      features: string[];
      cta: string;
    };
    starter: {
      name: string;
      price: string;
      period: string;
      trialNote: string;
      blurb: string;
      features: (safetyLine: string) => string[];
      cta: string;
    };
    business: {
      name: string;
      price: string;
      period: string;
      trialNote: string;
      blurb: string;
      features: string[];
      cta: string;
    };
  };

  faq: {
    eyebrow: string;
    heading: string;
    q1: string;
    a1: string;
    q2: string;
    gpsAnswer: (locationLookup: string) => string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
    q7: string;
    a7: string;
    q8: string;
    a8: string;
  };

  ctaBand: {
    heading: string;
    intro: string;
    startFree: string;
    bookDemo: string;
  };
}
