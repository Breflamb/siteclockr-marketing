import {
  PinIcon,
  QrIcon,
  ShieldIcon,
  BellIcon,
  LayersIcon,
  SheetIcon,
} from "@/components/icons";

const features = [
  {
    icon: PinIcon,
    title: "GPS geofenced clock-in",
    body: "Workers clock in and out from their phone. SiteClockr checks they're actually within the site boundary before the time is recorded.",
  },
  {
    icon: QrIcon,
    title: "QR sign-in points",
    body: "Print a QR code for each site or gate. Scan to check in — perfect for visitors, subcontractors and shared entrances.",
  },
  {
    icon: ShieldIcon,
    title: "SafePass & manual handling",
    body: "Store card numbers, expiry dates and photos. Scan a card and the expiry is read automatically, then tracked against every worker.",
  },
  {
    icon: BellIcon,
    title: "Expiry reminders",
    body: "Automatic email reminders before SafePass and manual-handling certs expire — so nobody turns up to site out of date.",
  },
  {
    icon: LayersIcon,
    title: "Multi-site & multi-org",
    body: "Run every site and company from one dashboard, each with its own sites, roles, workers and branding.",
  },
  {
    icon: SheetIcon,
    title: "Timesheets & exports",
    body: "Hours roll up into clean weekly timesheets you can review, correct and export for payroll in a couple of clicks.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">Everything on site</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          One app for time, attendance and compliance
        </h2>
        <p className="mt-4 text-lg text-muted">
          Stop chasing paper dockets and expired cards. SiteClockr keeps an accurate,
          verifiable record of who was where — and whether they were qualified to be there.
        </p>
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
