const faqs = [
  {
    q: "Do workers need to download an app?",
    a: "No. SiteClockr runs in the phone's web browser, so there's nothing to install from an app store. Workers just open a link and clock in.",
  },
  {
    q: "How does the GPS check-in work?",
    a: "You draw a geofence around each site. When a worker clocks in, SiteClockr confirms their phone is inside that boundary before recording the time, so you know they were actually on site.",
  },
  {
    q: "How is SafePass tracked?",
    a: "You can store each worker's SafePass number, expiry and a photo of the card. Scanning the card reads the expiry automatically, and SiteClockr sends email reminders before it lapses.",
  },
  {
    q: "Can I run more than one company or site?",
    a: "Yes. SiteClockr is multi-site and multi-organisation, so you can manage every site, role and worker from a single dashboard.",
  },
  {
    q: "Is my data protected?",
    a: "Yes. Data is stored securely and the platform is built with GDPR in mind. You stay in control of your workers' information.",
  },
  {
    q: "What does it cost to get started?",
    a: "You can start for free with a single crew and upgrade when you need compliance tracking and multiple sites.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">FAQ</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Questions from the site office
        </h2>
      </div>

      <div className="mt-12 divide-y divide-line rounded-2xl border border-line bg-white">
        {faqs.map((item) => (
          <details key={item.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink">
              {item.q}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-transform group-open:rotate-45">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
