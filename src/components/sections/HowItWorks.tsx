"use client";

import { useCountry } from "@/components/CountryContext";

export function HowItWorks() {
  const { c } = useCountry();

  const steps = [
    {
      n: "01",
      title: "Set up your sites",
      body: `Add each site and set its location from your GPS on-site, a pin on the map, or ${c.locationLookup}, then set the geofence radius — or just print a QR code for the gate. Invite your workers by link, no app store download required.`,
    },
    {
      n: "02",
      title: "The crew clocks in",
      body: `Workers open SiteClockr on their phone and clock in. Location is verified against the geofence, and their ${c.safetyCardShort} status is checked on the spot.`,
    },
    {
      n: "03",
      title: "You get the records",
      body: "Hours build into weekly timesheets, compliance is tracked automatically, and reminders go out before any certificate expires. Export for payroll when ready.",
    },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-20 border-y border-line bg-brand-tint/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Live on site in an afternoon
          </h2>
          <p className="mt-4 text-lg text-muted">
            No hardware, no installers, no training days. If your team can send a text, they can use SiteClockr.
          </p>
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
