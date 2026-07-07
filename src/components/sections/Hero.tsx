"use client";

import { site } from "@/lib/site";
import { CheckIcon, ClockIcon, PinIcon, ShieldIcon, UsersIcon } from "@/components/icons";
import { useCountry } from "@/components/CountryContext";

export function Hero() {
  const { c } = useCountry();
  return (
    <section className="brand-gradient relative overflow-hidden text-white">
      {/* Decorative glows */}
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-mid/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-accent" />
            Time &amp; attendance for construction
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Clock the crew in.{" "}
            <span className="bg-gradient-to-r from-white to-brand-accent bg-clip-text text-transparent">
              Prove who was on site.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/85">{c.heroSubhead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.signupUrl}
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand shadow-lg shadow-black/10 transition-colors hover:bg-brand-tint"
            >
              Start free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              See how it works
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
            <li className="inline-flex items-center gap-2"><CheckIcon className="h-4 w-4 text-brand-accent" /> No hardware to buy</li>
            <li className="inline-flex items-center gap-2"><CheckIcon className="h-4 w-4 text-brand-accent" /> Works on any phone</li>
            <li className="inline-flex items-center gap-2"><CheckIcon className="h-4 w-4 text-brand-accent" /> GDPR-ready</li>
          </ul>
        </div>

        {/* Product mock — pure CSS so there are no image dependencies */}
        <div className="relative">
          {/* Floating live-count badge */}
          <div className="absolute -bottom-5 -left-4 z-10 hidden items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl ring-1 ring-black/5 sm:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-tint text-brand">
              <UsersIcon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wide text-muted">Currently on site</p>
              <p className="text-sm font-bold text-ink">12 clocked in</p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md rounded-3xl border border-white/15 bg-white p-5 shadow-2xl shadow-black/20 ring-1 ring-black/5">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg brand-gradient text-white">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Riverside Development</p>
                  <p className="text-xs text-muted">Block C · Cork</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-mid" />
                On site
              </span>
            </div>

            <div className="mt-4 rounded-2xl brand-gradient p-5 text-white">
              <p className="text-xs uppercase tracking-wide text-white/80">Clocked in</p>
              <p className="mt-1 flex items-center gap-2 text-3xl font-bold tabular-nums">
                <ClockIcon className="h-6 w-6" /> 07:58
              </p>
              <p className="mt-1 text-sm text-white/85">Within geofence · 12 m from centre</p>
            </div>

            <div className="mt-4 space-y-3">
              <MockRow icon={<ShieldIcon className="h-4 w-4" />} label={c.heroSafetyRowLabel} value="Valid · exp 06/2028" ok />
              <MockRow icon={<ShieldIcon className="h-4 w-4" />} label="Manual handling" value="Valid · exp 03/2027" ok />
              <MockRow icon={<ClockIcon className="h-4 w-4" />} label="This week" value="38h 15m" />
            </div>
          </div>
        </div>
      </div>

      {/* Soft transition into the white section below */}
      <div aria-hidden className="relative h-10 bg-gradient-to-b from-transparent to-white/0" />
    </section>
  );
}

function MockRow({
  icon,
  label,
  value,
  ok = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  ok?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
      <span className="flex items-center gap-2 text-sm font-medium text-ink">
        <span className="text-brand">{icon}</span>
        {label}
      </span>
      <span className={`text-sm font-semibold ${ok ? "text-brand" : "text-muted"}`}>{value}</span>
    </div>
  );
}
