import type { Messages } from "./types";

export const en: Messages = {
  locale: "en",
  htmlLang: "en-IE",

  nav: [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Compliance", href: "/#compliance" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],

  header: {
    blog: "Blog",
    contact: "Contact",
    login: "Log in",
    startFree: "Start free",
    openMenu: "Open menu",
    chooseCountry: "Choose your country",
    homeAria: "SiteClockr home",
  },

  footer: {
    product: "Product",
    company: "Company",
    privacy: "Privacy",
    gdpr: "GDPR",
    copyright: (year, name) => `© ${year} ${name}. All rights reserved.`,
    madeIn: "Made in Ireland for construction & field teams.",
    description:
      "SiteClockr is GPS and QR-based time tracking for construction and field teams in Ireland and Britain. Geofenced clock-ins, SafePass and CSCS tracking with expiry reminders, live on-site views, and CSV payroll exports — free to start.",
  },

  hero: {
    eyebrow: "Time & attendance for construction",
    h1Line1: "Clock the crew in.",
    h1Highlight: "Prove who was on site.",
    ctaStart: "Start free",
    ctaHow: "See how it works",
    bullets: ["No hardware to buy", "Works on any phone", "GDPR-ready"],
    mockCurrentlyOnSite: "Currently on site",
    mockClockedInCount: "12 clocked in",
    mockSiteName: "Riverside Development",
    mockSiteLocation: "Block C · Cork",
    mockOnSite: "On site",
    mockClockedInLabel: "Clocked in",
    mockGeofence: "Within geofence · 12 m from centre",
    mockManualHandling: "Manual handling",
    mockValidExp: "Valid · exp 06/2028",
    mockValidExp2: "Valid · exp 03/2027",
    mockThisWeek: "This week",
    mockWeekHours: "38h 15m",
  },

  features: {
    eyebrow: "Everything on site",
    heading: "One app for time, attendance and compliance",
    intro:
      "Stop chasing paper dockets and expired cards. SiteClockr keeps an accurate, verifiable record of who was where — and whether they were qualified to be there.",
    gpsTitle: "GPS geofenced clock-in",
    gpsBody: (locationLookup) =>
      `Set each site's location from your phone's GPS on-site, a pin on the map, or ${locationLookup} — then set the radius. Every clock-in needs a live GPS fix inside the boundary before the time is recorded.`,
    qrTitle: "Printable QR sign-in",
    qrBody:
      "Generate a QR code for each site and print it or download the PNG with your own title and footer. Workers scan it to land on the right site and clock in.",
    liveTitle: "Live on-site view",
    liveBody:
      "See exactly who is clocked in right now, with a running “currently clocked in” count you can filter by site or name. Fix or add a check-in in seconds.",
    expiryTitle: "Automatic expiry reminders",
    expiryBody: (safetyCardShort) =>
      `Email reminders go out before ${safetyCardShort} and manual-handling certs expire — so nobody turns up to site out of date.`,
    timesheetsTitle: "Weekly timesheets & CSV export",
    timesheetsBody:
      "Completed hours roll into Monday-to-Monday timesheets, exported to CSV in your own timezone — ready to drop into any payroll system.",
  },

  howItWorks: {
    eyebrow: "How it works",
    heading: "Live on site in an afternoon",
    intro:
      "No hardware, no installers, no training days. If your team can send a text, they can use SiteClockr.",
    step1Title: "Set up your sites",
    step1Body: (locationLookup) =>
      `Add each site and set its location from your GPS on-site, a pin on the map, or ${locationLookup}, then set the geofence radius — or just print a QR code for the gate. Invite your workers by link, no app store download required.`,
    step2Title: "The crew clocks in",
    step2Body: (safetyCardShort) =>
      `Workers open SiteClockr on their phone and clock in. Location is verified against the geofence, and their ${safetyCardShort} status is checked on the spot.`,
    step3Title: "You get the records",
    step3Body:
      "Hours build into weekly timesheets, compliance is tracked automatically, and reminders go out before any certificate expires. Export for payroll when ready.",
  },

  compliance: {
    eyebrow: "Compliance, handled",
    cta: "Track your first crew free",
    registerTitle: "Qualification register",
    statusValid: "Valid",
    statusExpiring: "Expiring",
    workers: [
      { name: "J. Byrne", role: "General operative" },
      { name: "M. O'Sullivan", role: "Ganger" },
      { name: "P. Nowak", role: "Steel fixer" },
      { name: "T. Walsh", role: "Plant operator" },
    ],
  },

  moreFeatures: {
    eyebrow: "Under the hood",
    heading: "Plenty more where that came from",
    intro: "The details that make SiteClockr fit how your sites actually run.",
    abuseTitle: "Abuse alerts",
    abuseBody:
      "Get emailed automatically when someone tries to clock into two sites at once, or when one phone is being used to sign in several workers.",
    apiTitle: "Developer API & webhooks",
    apiBody:
      "Issue API keys so payroll and HR tools can read your sites and clock-in status, and have clock-in/out events pushed to your systems via webhooks.",
    multiTitle: "Multi-site & multi-company",
    multiBody:
      "Run several sites — and even several companies — from one account, each with its own sites, roles and workers.",
    portalTitle: "Employee portal",
    portalBody:
      "Workers check their own hours and request time off from their phone, keeping the office phone quiet.",
    manualTitle: "Manual entries & corrections",
    manualBody:
      "Add or fix a check-in when someone forgets their phone. Sensitive changes are recorded in an admin audit log.",
    backupTitle: "Full data backups",
    backupBody:
      "Download a complete backup of your organisation any time as JSON or a CSV bundle — your data stays yours.",
    coloursTitle: "Your colours",
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Start free. Upgrade when the crew grows.",
    intro:
      "Sole Trader is free forever. Paid plans start at €29/month with a 21-day free trial — no card required — and are billed in euro. Cancel anytime.",
    mostPopular: "Most popular",
    soleTrader: {
      name: "Sole Trader",
      price: "Free",
      period: "forever",
      blurb: "For a one-person operation getting off paper.",
      features: [
        "1 login user",
        "1 active site (switch sites with a 24h cooldown)",
        "1 worker",
        "GPS & QR clock-in",
        "Weekly CSV timesheets",
      ],
      cta: "Start free",
    },
    starter: {
      name: "Starter",
      price: "€29",
      period: "/ month",
      trialNote: "21-day free trial · no card required",
      blurb: "For a growing contractor running a few sites.",
      features: (safetyLine) => [
        "Up to 3 active sites",
        "25 workers included",
        "+€1.50/mo per extra worker",
        safetyLine,
        "Automatic expiry reminders",
        "Live on-site view & abuse alerts",
      ],
      cta: "Start free trial",
    },
    business: {
      name: "Business",
      price: "€59",
      period: "/ month",
      trialNote: "21-day free trial · no card required",
      blurb: "For established firms with multiple sites.",
      features: [
        "Up to 25 active sites",
        "50 workers included",
        "+€1.50/mo per extra worker",
        "Everything in Starter",
        "API keys & webhooks",
        "Full data backups & audit log",
      ],
      cta: "Start free trial",
    },
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Questions from the site office",
    q1: "Do workers need to download an app?",
    a1: "No. SiteClockr runs in the phone's web browser, so there's nothing to install from an app store. Workers open a link or scan a site QR code and clock in.",
    q2: "How does the GPS check-in work?",
    gpsAnswer: (locationLookup) =>
      `You set each site's location however suits — your phone's GPS on-site, a point on the map, or ${locationLookup} — then choose a radius in metres. When a worker clocks in, SiteClockr takes a fresh GPS fix and checks they're inside the boundary before recording the time.`,
    q4: "Can I see who's on site right now?",
    a4: "Yes. The admin dashboard has a live “currently clocked in” view with a running count you can filter by site or name, so you can tell at a glance who is where.",
    q5: "Does it connect to payroll or other systems?",
    a5: "You can export weekly timesheets to CSV for any payroll system, download full data backups as JSON or CSV, and use API keys and webhooks so other tools can read your sites and clock-in status and receive clock-in/out events.",
    q6: "Can I run more than one site or company?",
    a6: "Yes. SiteClockr is multi-site and multi-company. Your plan sets how many active sites and workers are included, and you can add extra workers for €1.50 each per month.",
    q7: "What does it cost to get started?",
    a7: "The Sole Trader plan is free forever. Starter is €29/month and Business is €59/month, each with a 21-day free trial and no card required — after that it's a simple monthly plan in euro, and you can cancel anytime.",
    q8: "Is my data protected?",
    a8: "Yes. Data is stored securely, the platform is built with GDPR in mind, and you can download a complete backup of your organisation at any time. You stay in control of your workers' information.",
  },

  ctaBand: {
    heading: "Get your site clocking in tomorrow morning",
    intro: "Set up your first site in minutes. Free to start — no card, no hardware, no fuss.",
    startFree: "Start free",
    bookDemo: "Book a demo",
  },

  contact: {
    title: "Contact us",
    intro: "Questions about SiteClockr, pricing, or getting your first site set up? Send a message — we usually reply within one business day.",
    demoIntro: "Tell us a bit about your crew and sites — we'll get back to you to arrange a walkthrough.",
    nameLabel: "Name",
    emailLabel: "Email",
    companyLabel: "Company (optional)",
    companyPlaceholder: "Your contracting business",
    phoneLabel: "Phone (optional)",
    phonePlaceholder: "For a quick call back",
    topicLabel: "What is this about?",
    topicOptions: {
      general: "General question",
      demo: "Book a demo",
      pricing: "Pricing & plans",
      support: "Help with my account",
      other: "Something else",
    },
    teamSizeLabel: "Workers on payroll (optional)",
    teamSizePlaceholder: "Select…",
    teamSizeOptions: {
      unknown: "Prefer not to say",
      solo: "Just me",
      small: "2–25 workers",
      medium: "26–50 workers",
      large: "50+ workers",
    },
    sitesLabel: "Active sites (optional)",
    sitesPlaceholder: "Select…",
    sitesOptions: {
      unknown: "Prefer not to say",
      one: "1 site",
      few: "2–3 sites",
      several: "4–10 sites",
      many: "10+ sites",
    },
    messageLabel: "Message",
    messagePlaceholder: "How can we help?",
    demoMessagePlaceholder: "Number of sites, workers, and what you're using today…",
    submit: "Send message",
    sending: "Sending…",
    successTitle: "Message sent",
    successBody: "Thanks — we've received your message and will reply to your email shortly.",
    errorGeneric: "Something went wrong. Please try again or email us directly.",
    captchaRequired: "Please complete the security check below.",
    notConfiguredTitle: "Contact form unavailable",
    notConfiguredBody: "The form is not configured on this build yet. Email us directly instead:",
    emailInstead: "Email us",
    privacyNote: "We'll use your details only to respond. See our",
    privacyLink: "privacy policy",
    demoSubject: "SiteClockr demo request",
    defaultSubject: "SiteClockr contact form",
  },
};
