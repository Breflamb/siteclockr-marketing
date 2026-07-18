"use client";

import {
  PinIcon,
  QrIcon,
  ShieldIcon,
  BellIcon,
  UsersIcon,
  SheetIcon,
} from "@/components/icons";
import { useCountry } from "@/components/CountryContext";

export function Features() {
  const { c, m } = useCountry();
  const f = m.features;

  const features = [
    { icon: PinIcon, title: f.gpsTitle, body: f.gpsBody(c.locationLookup) },
    { icon: QrIcon, title: f.qrTitle, body: f.qrBody },
    { icon: UsersIcon, title: f.liveTitle, body: f.liveBody },
    { icon: ShieldIcon, title: c.safetyFeatureTitle, body: c.safetyFeatureBody },
    { icon: BellIcon, title: f.expiryTitle, body: f.expiryBody(c.safetyCardShort) },
    { icon: SheetIcon, title: f.timesheetsTitle, body: f.timesheetsBody },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">{f.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{f.heading}</h2>
        <p className="mt-4 text-lg text-muted">{f.intro}</p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-brand/5"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors group-hover:brand-gradient group-hover:text-white">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
