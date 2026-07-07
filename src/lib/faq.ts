import { COUNTRIES, DEFAULT_COUNTRY, type CountryCode } from "@/lib/countries";

export interface FaqItem {
  q: string;
  a: string;
}

/** Shared FAQ copy — used by the FAQ section and JSON-LD (defaults to Ireland). */
export function getFaqs(country: CountryCode = DEFAULT_COUNTRY): FaqItem[] {
  const c = COUNTRIES[country];

  return [
    {
      q: "Do workers need to download an app?",
      a: "No. SiteClockr runs in the phone's web browser, so there's nothing to install from an app store. Workers open a link or scan a site QR code and clock in.",
    },
    {
      q: "How does the GPS check-in work?",
      a: `You set each site's location however suits — your phone's GPS on-site, a point on the map, or ${c.locationLookup} — then choose a radius in metres. When a worker clocks in, SiteClockr takes a fresh GPS fix and checks they're inside the boundary before recording the time.`,
    },
    {
      q: c.faqSafetyQ,
      a: c.faqSafetyA,
    },
    {
      q: "Can I see who's on site right now?",
      a: "Yes. The admin dashboard has a live “currently clocked in” view with a running count you can filter by site or name, so you can tell at a glance who is where.",
    },
    {
      q: "Does it connect to payroll or other systems?",
      a: "You can export weekly timesheets to CSV for any payroll system, download full data backups as JSON or CSV, and use API keys and webhooks so other tools can read your sites and clock-in status and receive clock-in/out events.",
    },
    {
      q: "Can I run more than one site or company?",
      a: "Yes. SiteClockr is multi-site and multi-company. Your plan sets how many active sites and workers are included, and you can add extra workers for €1.50 each per month.",
    },
    {
      q: "What does it cost to get started?",
      a: "The Sole Trader plan is free forever. Starter is €29/month and Business is €59/month, each with a 21-day free trial and no card required — after that it's a simple monthly plan in euro, and you can cancel anytime.",
    },
    {
      q: "Is my data protected?",
      a: "Yes. Data is stored securely, the platform is built with GDPR in mind, and you can download a complete backup of your organisation at any time. You stay in control of your workers' information.",
    },
  ];
}
