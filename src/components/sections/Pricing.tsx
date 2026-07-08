"use client";

import { site } from "@/lib/site";
import { CheckIcon } from "@/components/icons";
import { useCountry } from "@/components/CountryContext";

export function Pricing() {
  const { c, m } = useCountry();
  const p = m.pricing;

  const tiers = [
    {
      name: p.soleTrader.name,
      price: p.soleTrader.price,
      period: p.soleTrader.period,
      trialNote: "",
      blurb: p.soleTrader.blurb,
      features: p.soleTrader.features,
      cta: p.soleTrader.cta,
      href: site.signupUrl,
      featured: false,
    },
    {
      name: p.starter.name,
      price: p.starter.price,
      period: p.starter.period,
      trialNote: p.starter.trialNote,
      blurb: p.starter.blurb,
      features: p.starter.features(c.pricingSafetyLine),
      cta: p.starter.cta,
      href: site.signupUrl,
      featured: true,
    },
    {
      name: p.business.name,
      price: p.business.price,
      period: p.business.period,
      trialNote: p.business.trialNote,
      blurb: p.business.blurb,
      features: p.business.features,
      cta: p.business.cta,
      href: site.signupUrl,
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="scroll-mt-20 border-y border-line bg-brand-tint/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{p.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{p.heading}</h2>
          <p className="mt-4 text-lg text-muted">{p.intro}</p>
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
                  {p.mostPopular}
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
