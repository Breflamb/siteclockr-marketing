export const site = {
  name: "SiteClockr",
  domain: "www.siteclockr.com",
  // The live application (separate Flask app on siteclockr.ie).
  appUrl: "https://siteclockr.ie/siteclockr",
  loginUrl: "https://siteclockr.ie/siteclockr/login",
  signupUrl: "https://siteclockr.ie/siteclockr/signup",
  privacyUrl: "https://siteclockr.ie/siteclockr/privacy",
  gdprUrl: "https://siteclockr.ie/siteclockr/gdpr",
  contactEmail: "hello@siteclockr.com",
  /** Paste the content value from Google Search Console → HTML tag method (optional). */
  googleSiteVerification: "cwNPw4-RUsXxJ2NwT-HVfbVkDe4inJLho-sXlmZAzjQ",
  tagline: "Time & attendance, built for the site.",
  description:
    "SiteClockr is GPS and QR-based time tracking for construction and field teams in Ireland and Britain. Geofenced clock-ins, SafePass and CSCS tracking with expiry reminders, live on-site views, and CSV payroll exports — free to start.",
} as const;

export const nav = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Compliance", href: "#compliance" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;
