import { site } from "@/lib/site";
import { CheckIcon } from "@/components/icons";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    blurb: "For a single crew getting off paper.",
    features: ["1 site", "Up to 10 workers", "GPS & QR clock-in", "Weekly timesheets"],
    cta: "Start free",
    href: site.signupUrl,
    featured: false,
  },
  {
    name: "Crew",
    price: "€2",
    period: "/ worker / mo",
    blurb: "For growing contractors running multiple sites.",
    features: [
      "Unlimited sites",
      "SafePass & manual-handling tracking",
      "Automatic expiry reminders",
      "Payroll exports",
      "Email support",
    ],
    cta: "Start free trial",
    href: site.signupUrl,
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Let's talk",
    period: "",
    blurb: "For larger firms with custom needs.",
    features: ["Everything in Crew", "Custom roles & branding", "API access", "Priority support"],
    cta: "Contact sales",
    href: `mailto:${site.contactEmail}`,
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-y border-line bg-brand-tint/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Simple pricing that scales with the crew
          </h2>
          <p className="mt-4 text-lg text-muted">
            Start free, upgrade when you need compliance tracking and multiple sites. Indicative pricing — cancel anytime.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-white p-7 ${
                tier.featured ? "border-brand shadow-xl shadow-brand/10 lg:-mt-4 lg:mb-4" : "border-line"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-7 rounded-full brand-gradient px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-ink">{tier.name}</h3>
              <p className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-ink">{tier.price}</span>
                <span className="text-sm text-muted">{tier.period}</span>
              </p>
              <p className="mt-2 text-sm text-muted">{tier.blurb}</p>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={`mt-7 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  tier.featured
                    ? "bg-brand text-white hover:bg-brand-hover"
                    : "border border-line text-ink hover:border-brand hover:text-brand"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
