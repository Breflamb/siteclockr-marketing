"use client";

import { useCountry } from "@/components/CountryContext";

export function HowItWorks() {
  const { c, m } = useCountry();
  const w = m.howItWorks;

  const steps = [
    { n: "01", title: w.step1Title, body: w.step1Body(c.locationLookup) },
    { n: "02", title: w.step2Title, body: w.step2Body(c.safetyCardShort) },
    { n: "03", title: w.step3Title, body: w.step3Body },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-20 border-y border-line bg-brand-tint/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{w.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{w.heading}</h2>
          <p className="mt-4 text-lg text-muted">{w.intro}</p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="relative rounded-2xl border border-line bg-white p-7">
              <span className="text-5xl font-extrabold text-brand-accent">{step.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
