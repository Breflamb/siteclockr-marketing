import { site } from "@/lib/site";
import { CheckIcon, ClockIcon, PinIcon, ShieldIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="hero-gradient border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-brand">
            <span className="h-2 w-2 rounded-full bg-brand-mid" />
            Time & attendance for construction
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Clock the crew in.{" "}
            <span className="bg-gradient-to-r from-brand-deep to-brand-mid bg-clip-text text-transparent">
              Prove who was on site.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted">
            {site.name} turns any phone into a site clock. GPS-geofenced check-ins, QR
            sign-in points, and automatic SafePass &amp; manual-handling tracking — so
            timesheets and compliance take care of themselves.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.signupUrl}
              className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover"
            >
              Start free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-line bg-white px-6 py-3 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              See how it works
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li className="inline-flex items-center gap-2"><CheckIcon className="h-4 w-4 text-brand" /> No hardware to buy</li>
            <li className="inline-flex items-center gap-2"><CheckIcon className="h-4 w-4 text-brand" /> Works on any phone</li>
            <li className="inline-flex items-center gap-2"><CheckIcon className="h-4 w-4 text-brand" /> GDPR-ready</li>
          </ul>
        </div>

        {/* Product mock — pure CSS so there are no image dependencies */}
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl brand-gradient opacity-10 blur-2xl" />
          <div className="mx-auto w-full max-w-md rounded-3xl border border-line bg-white p-5 shadow-2xl shadow-brand/10">
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
              <span className="rounded-full bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand">On site</span>
            </div>

            <div className="mt-4 rounded-2xl brand-gradient p-5 text-white">
              <p className="text-xs uppercase tracking-wide text-white/80">Clocked in</p>
              <p className="mt-1 flex items-center gap-2 text-3xl font-bold tabular-nums">
                <ClockIcon className="h-6 w-6" /> 07:58
              </p>
              <p className="mt-1 text-sm text-white/85">Within geofence · 12 m from centre</p>
            </div>

            <div className="mt-4 space-y-3">
              <MockRow icon={<ShieldIcon className="h-4 w-4" />} label="SafePass" value="Valid · exp 06/2028" ok />
              <MockRow icon={<ShieldIcon className="h-4 w-4" />} label="Manual handling" value="Valid · exp 03/2027" ok />
              <MockRow icon={<ClockIcon className="h-4 w-4" />} label="This week" value="38h 15m" />
            </div>
          </div>
        </div>
      </div>
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
