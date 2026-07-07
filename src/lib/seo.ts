import { site } from "@/lib/site";
import { getFaqs } from "@/lib/faq";

export const SITE_URL = "https://www.siteclockr.com";
export const OG_IMAGE = `${SITE_URL}/brand/og.png`;

export const seoKeywords = [
  "construction time tracking",
  "site clock in app",
  "GPS geofence clock in",
  "QR code site sign in",
  "construction timesheets",
  "SafePass tracking",
  "CSCS card tracking",
  "manual handling expiry reminders",
  "who is on site now",
  "construction attendance Ireland",
  "contractor time tracking UK",
  "site attendance software",
  "payroll CSV export construction",
  "multi site time tracking",
] as const;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo.png`,
    email: site.contactEmail,
    description: site.description,
    areaServed: ["IE", "GB"],
    sameAs: ["https://buymeacoffee.com/SiteClockr"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: SITE_URL,
    description: site.description,
    publisher: { "@type": "Organization", name: site.name },
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    url: SITE_URL,
    description: site.description,
    offers: [
      {
        "@type": "Offer",
        name: "Sole Trader",
        price: "0",
        priceCurrency: "EUR",
        description: "Free forever — 1 user, 1 active site, 1 worker",
      },
      {
        "@type": "Offer",
        name: "Starter",
        price: "29",
        priceCurrency: "EUR",
        description: "Up to 3 active sites, 25 workers included",
      },
      {
        "@type": "Offer",
        name: "Business",
        price: "59",
        priceCurrency: "EUR",
        description: "Up to 25 active sites, 50 workers included",
      },
    ],
    featureList: [
      "GPS geofenced clock-in",
      "Printable QR sign-in",
      "Live on-site view",
      "SafePass and CSCS tracking",
      "Automatic expiry reminders",
      "Weekly CSV timesheet export",
      "API keys and webhooks",
    ],
  };
}

export function faqPageJsonLd() {
  const faqs = getFaqs("IE");

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function homePageJsonLd() {
  return [organizationJsonLd(), websiteJsonLd(), softwareApplicationJsonLd(), faqPageJsonLd()];
}
