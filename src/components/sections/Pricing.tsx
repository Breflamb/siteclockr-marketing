"use client";

import { site } from "@/lib/site";
import { CheckIcon } from "@/components/icons";
import { useCountry } from "@/components/CountryContext";

export function Pricing() {
  const { c } = useCountry();

  const tiers = [
    {
      name: "Sole Trader",
      price: "Free",
      period: "forever",
      trialNote: "",
      blurb: "For a one-person operation getting off paper.",
      features: [
        "1 login user",
        "1 active site (switch sites with a 24h cooldown)",
        "1 worker",
        "GPS & QR clock-in",
        "Weekly CSV timesheets",
      ],
      cta: "Start free",
      href: site.signupUrl,
      featured: false,
    },
    {
      name: "Starter",
      price: "\u20ac29",
      period: "/ month",
      trialNote: "21-day free trial \u00b7 no card required",
      blurb: "For a growing contractor running a few sites.",
      features: [
        "Up to 3 active sites",
        "25 workers included",
        "+\u20ac1.50/mo per extra worker",
        c.pricingSafetyLine,
        "Automatic expiry reminders",
        "Live on-site view & abuse alerts",
      ],
      cta: "Start free trial",
      href: site.signupUrl,
      featured: true,
    },
    {
      name: "Business",
      price: "\u20ac59",
      period: "/ month",
      trialNote: "21-day free trial \u00b7 no card required",
      blurb: "For established firms with multiple sites.",
      features: [
        "Up to 25 active sites",
        "50 workers included",
        "+\u20ac1.50/mo per extra worker",
        "Everything in Starter",
        "API keys & webhooks",
        "Full data backups & audit log",
      ],
      cta: "Start free trial",
      href: site.signupUrl,
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="scroll-mt-20 border-y border-line bg-brand-tint/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Start free. Upgrade when the crew grows.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Sole Trader is free forever. Paid plans start at €29/month with a 21-day free trial —
            no card required — and are billed in euro. Cancel anytime.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-white p-7 ${
                tier.featured ? "border-brand shadow-xl shadow-brand/10 lg:-mt-4 lg:mb-4" : "border-line"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-7 rounded-full brand-gradient px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-ink">{tier.name}</h3>
              <p className="mt-2 flex flex-wrap items-baseline gap-x-2">
                <span className="text-4xl font-extrabold text-ink">{tier.price}</span>
                <span className="text-sm text-muted">{tier.period}</span>
              </p>
              {tier.trialNote && (
                <p className="mt-1 text-sm font-medium text-brand">{tier.trialNote}</p>
              )}
              <p className="mt-2 text-sm text-muted">{tier.blurb}</p>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={`mt-7 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  tier.featured
                    ? "bg-brand text-white hover:bg-brand-hover"
                    : "border border-line text-ink hover:border-brand hover:text-brand"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted">{c.currencyNote}</p>
      </div>
    </section>
  );
}
