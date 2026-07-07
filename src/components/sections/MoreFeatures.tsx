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

const items = [
  {
    icon: BellIcon,
    title: "Abuse alerts",
    body: "Get emailed automatically when someone tries to clock into two sites at once, or when one phone is being used to sign in several workers.",
  },
  {
    icon: CodeIcon,
    title: "Developer API & webhooks",
    body: "Issue API keys so payroll and HR tools can read your sites and clock-in status, and have clock-in/out events pushed to your systems via webhooks.",
  },
  {
    icon: LayersIcon,
    title: "Multi-site & multi-company",
    body: "Run several sites — and even several companies — from one account, each with its own sites, roles and workers.",
  },
  {
    icon: PaletteIcon,
    title: "Your colours",
    body: "Brand every screen with your logo and a colour palette: 10 standard themes plus all 32 GAA county colours.",
  },
  {
    icon: PhoneIcon,
    title: "Employee portal",
    body: "Workers check their own hours and request time off from their phone, keeping the office phone quiet.",
  },
  {
    icon: EditIcon,
    title: "Manual entries & corrections",
    body: "Add or fix a check-in when someone forgets their phone. Sensitive changes are recorded in an admin audit log.",
  },
  {
    icon: DownloadIcon,
    title: "Full data backups",
    body: "Download a complete backup of your organisation any time as JSON or a CSV bundle — your data stays yours.",
  },
  {
    icon: PinIcon,
    title: "Eircode address autofill",
    body: "Set your company address in seconds from an Eircode, so it shows correctly on clock-in pages and QR printouts.",
  },
];

export function MoreFeatures() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Under the hood</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Plenty more where that came from
          </h2>
          <p className="mt-4 text-lg text-muted">
            The details that make SiteClockr fit how Irish sites actually run.
          </p>
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
