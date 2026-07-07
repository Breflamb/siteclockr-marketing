"use client";

import { useCountry } from "@/components/CountryContext";

export function Faq() {
  const { c } = useCountry();

  const faqs = [
    {
      q: "Do workers need to download an app?",
      a: "No. SiteClockr runs in the phone's web browser, so there's nothing to install from an app store. Workers open a link or scan a site QR code and clock in.",
    },
    {
      q: "How does the GPS check-in work?",
      a: "You capture each site's location by standing on-site and tapping \u201cUse my location\u201d, then set a radius in metres. When a worker clocks in, SiteClockr takes a fresh GPS fix and checks they're inside the boundary before recording the time.",
    },
    {
      q: c.faqSafetyQ,
      a: c.faqSafetyA,
    },
    {
      q: "Can I see who's on site right now?",
      a: "Yes. The admin dashboard has a live \u201ccurrently clocked in\u201d view with a running count you can filter by site or name, so you can tell at a glance who is where.",
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
      a: "The Sole Trader plan is free forever. Starter and Business come with a 21-day free trial with no card required — after that they're a simple monthly plan in euro, and you can cancel anytime.",
    },
    {
      q: "Is my data protected?",
      a: "Yes. Data is stored securely, the platform is built with GDPR in mind, and you can download a complete backup of your organisation at any time. You stay in control of your workers' information.",
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">FAQ</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Questions from the site office
        </h2>
      </div>

      <div className="mt-12 divide-y divide-line rounded-2xl border border-line bg-white">
        {faqs.map((item) => (
          <details key={item.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink">
              {item.q}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-transform group-open:rotate-45">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
