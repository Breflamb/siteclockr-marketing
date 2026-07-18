"use client";

import {
  BellIcon,
  CodeIcon,
  LayersIcon,
  PaletteIcon,
  PhoneIcon,
  EditIcon,
  DownloadIcon,
  PinIcon,
} from "@/components/icons";
import { useCountry } from "@/components/CountryContext";

export function MoreFeatures() {
  const { c, m } = useCountry();
  const f = m.moreFeatures;

  const items = [
    { icon: BellIcon, title: f.abuseTitle, body: f.abuseBody },
    { icon: CodeIcon, title: f.apiTitle, body: f.apiBody },
    { icon: LayersIcon, title: f.multiTitle, body: f.multiBody },
    { icon: PaletteIcon, title: f.coloursTitle, body: c.themesFeatureBody },
    { icon: PhoneIcon, title: f.portalTitle, body: f.portalBody },
    { icon: EditIcon, title: f.manualTitle, body: f.manualBody },
    { icon: DownloadIcon, title: f.backupTitle, body: f.backupBody },
    { icon: PinIcon, title: c.addressFeatureTitle, body: c.addressFeatureBody },
  ];

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{f.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{f.heading}</h2>
          <p className="mt-4 text-lg text-muted">{f.intro}</p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
