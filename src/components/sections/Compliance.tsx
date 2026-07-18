"use client";

import { site } from "@/lib/site";
import { CheckIcon } from "@/components/icons";
import { useCountry } from "@/components/CountryContext";

export function Compliance() {
  const { c, m } = useCountry();
  const comp = m.compliance;
  const points = c.compliancePoints;

  const rows = comp.workers.map((worker, i) => ({
    ...worker,
    status: i === 2 ? comp.statusExpiring : comp.statusValid,
    exp: i === 0 ? "06/2028" : i === 1 ? "11/2027" : i === 2 ? "08/2026" : "02/2029",
    ok: i !== 2,
  }));

  return (
    <section id="compliance" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{comp.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {c.complianceHeading}
          </h2>
          <p className="mt-4 text-lg text-muted">{c.complianceIntro}</p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <a
            href={site.signupUrl}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover"
          >
            {comp.cta}
          </a>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6 shadow-xl shadow-brand/5">
          <p className="text-sm font-semibold text-ink">{comp.registerTitle}</p>
          <div className="mt-4 space-y-3">
            {rows.map((row) => (
              <div key={row.name} className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-ink">{row.name}</p>
                  <p className="text-xs text-muted">{row.role}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      row.ok ? "bg-brand-tint text-brand" : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {row.status}
                  </span>
                  <p className="mt-1 text-xs text-muted">
                    {c.complianceRegisterExpLabel} {row.exp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
