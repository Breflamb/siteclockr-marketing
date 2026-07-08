"use client";

import { useCountry } from "@/components/CountryContext";
import { getFaqs } from "@/lib/faq";

export function Faq() {
  const { country, m } = useCountry();
  const faqs = getFaqs(country);

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">{m.faq.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{m.faq.heading}</h2>
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
