import { site } from "@/lib/site";
import { CheckIcon } from "@/components/icons";

const points = [
  "Store SafePass number, expiry and card photos against each worker",
  "Card scanning reads the expiry date for you — no manual typing",
  "Manual-handling certificates tracked the same way",
  "Automatic email reminders before anything expires",
  "See at a glance who is out of date before they reach the gate",
  "Every check-in is time-stamped and location-verified",
];

export function Compliance() {
  return (
    <section id="compliance" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Compliance, handled</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Never let an expired SafePass onto site again
          </h2>
          <p className="mt-4 text-lg text-muted">
            SiteClockr keeps a live register of every worker&apos;s qualifications and warns
            you well before they lapse — protecting your team and your compliance record.
          </p>

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
            Track your first crew free
          </a>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6 shadow-xl shadow-brand/5">
          <p className="text-sm font-semibold text-ink">Qualification register</p>
          <div className="mt-4 space-y-3">
            {[
              { name: "J. Byrne", role: "General operative", status: "Valid", exp: "06/2028", ok: true },
              { name: "M. O'Sullivan", role: "Ganger", status: "Valid", exp: "11/2027", ok: true },
              { name: "P. Nowak", role: "Steel fixer", status: "Expiring", exp: "08/2026", ok: false },
              { name: "T. Walsh", role: "Plant operator", status: "Valid", exp: "02/2029", ok: true },
            ].map((row) => (
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
                  <p className="mt-1 text-xs text-muted">SafePass exp {row.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
