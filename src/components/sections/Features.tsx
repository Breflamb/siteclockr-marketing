import {
  PinIcon,
  QrIcon,
  ShieldIcon,
  BellIcon,
  UsersIcon,
  SheetIcon,
} from "@/components/icons";

const features = [
  {
    icon: PinIcon,
    title: "GPS geofenced clock-in",
    body: "Stand on the site, tap to capture the location and set a radius. Every clock-in needs a live GPS fix and is checked against the site boundary before the time is recorded.",
  },
  {
    icon: QrIcon,
    title: "Printable QR sign-in",
    body: "Generate a QR code for each site and print it or download the PNG with your own title and footer. Workers scan it to land on the right site and clock in.",
  },
  {
    icon: UsersIcon,
    title: "Live on-site view",
    body: "See exactly who is clocked in right now, with a running \u201ccurrently clocked in\u201d count you can filter by site or name. Fix or add a check-in in seconds.",
  },
  {
    icon: ShieldIcon,
    title: "SafePass & manual handling",
    body: "Store card numbers, expiry dates and front/back photos. Snap the card and SiteClockr reads the SafePass number and expiry for you.",
  },
  {
    icon: BellIcon,
    title: "Automatic expiry reminders",
    body: "Email reminders go out before SafePass and manual-handling certs expire \u2014 so nobody turns up to site out of date.",
  },
  {
    icon: SheetIcon,
    title: "Weekly timesheets & CSV export",
    body: "Completed hours roll into Monday-to-Monday timesheets, exported to CSV in your own timezone \u2014 ready to drop into any payroll system.",
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
