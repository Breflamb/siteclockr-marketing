import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="brand-gradient">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get your site clocking in tomorrow morning
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
          Set up your first site in minutes. Free to start — no card, no hardware, no fuss.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.signupUrl}
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand shadow-sm transition-colors hover:bg-brand-tint"
          >
            Start free
          </a>
          <a
            href={`mailto:${site.contactEmail}`}
            className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
