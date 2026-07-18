"use client";

import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { useState } from "react";
import { useCountry } from "@/components/CountryContext";
import { contactForm, isContactFormConfigured } from "@/lib/contact";
import { site } from "@/lib/site";

type FormStatus = "idle" | "sending" | "success" | "error";
type TopicKey = "general" | "demo" | "pricing" | "support" | "other";

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink shadow-sm transition-colors placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";
  "mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink shadow-sm transition-colors placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function ContactForm() {
  const { m } = useCountry();
  const c = m.contact;
  const searchParams = useSearchParams();
  const isDemo = searchParams.get("intent") === "demo";
  const defaultTopic: TopicKey = isDemo ? "demo" : "general";

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [topic, setTopic] = useState<TopicKey>(defaultTopic);

  const configured = isContactFormConfigured();
  const turnstileEnabled = contactForm.turnstileSiteKey.length > 0;

  if (!configured) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
        <h2 className="text-lg font-semibold text-ink">{c.notConfiguredTitle}</h2>
        <p className="mt-2 text-sm text-muted">{c.notConfiguredBody}</p>
        <a
          href={`mailto:${site.contactEmail}`}
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover"
        >
          {c.emailInstead}: {site.contactEmail}
        </a>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-brand-tint/50 p-8 text-center">
        <h2 className="text-xl font-semibold text-ink">{c.successTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{c.successBody}</p>
      </div>
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    if (turnstileEnabled && !data.get("cf-turnstile-response")) {
      setErrorMessage(c.captchaRequired);
      setStatus("error");
      return;
    }

    const topicValue = (data.get("topic") as TopicKey) || defaultTopic;
    const topicLabel = c.topicOptions[topicValue] ?? c.topicOptions.general;
    data.set("subject", `SiteClockr — ${topicLabel}`);
    data.set("from_name", "SiteClockr website");
    data.set("botcheck", "");

    setStatus("sending");

    try {
      const response = await fetch(contactForm.submitUrl, {
        method: "POST",
        body: data,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? c.errorGeneric);
      }

      form.reset();
      setTopic(defaultTopic);
      setStatus("success");

      if (turnstileEnabled && typeof window !== "undefined") {
        const turnstile = (window as Window & { turnstile?: { reset: () => void } }).turnstile;
        turnstile?.reset();
      }
    } catch {
      setStatus("error");
      setErrorMessage(c.errorGeneric);
    }
  }

  const topicEntries = Object.entries(c.topicOptions) as [TopicKey, string][];

  return (
    <>
      {turnstileEnabled && (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
      )}

      <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
        <input type="hidden" name="access_key" value={contactForm.web3formsAccessKey} />
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-ink">
              {c.nameLabel}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-ink">
              {c.emailLabel}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-company" className="block text-sm font-medium text-ink">
              {c.companyLabel}
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder={c.companyPlaceholder}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-ink">
              {c.phoneLabel}
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={c.phonePlaceholder}
              className={fieldClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="contact-topic" className="block text-sm font-medium text-ink">
              {c.topicLabel}
            </label>
            <select
              id="contact-topic"
              name="topic"
              required
              value={topic}
              onChange={(e) => setTopic(e.target.value as TopicKey)}
              className={fieldClass}
            >
              {topicEntries.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-team-size" className="block text-sm font-medium text-ink">
              {c.teamSizeLabel}
            </label>
            <select id="contact-team-size" name="team_size" defaultValue="" className={fieldClass}>
              <option value="">{c.teamSizePlaceholder}</option>
              {Object.entries(c.teamSizeOptions).map(([value, label]) => (
                <option key={value} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-sites" className="block text-sm font-medium text-ink">
              {c.sitesLabel}
            </label>
            <select id="contact-sites" name="active_sites" defaultValue="" className={fieldClass}>
              <option value="">{c.sitesPlaceholder}</option>
              {Object.entries(c.sitesOptions).map(([value, label]) => (
                <option key={value} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="contact-message" className="block text-sm font-medium text-ink">
              {c.messageLabel}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder={isDemo ? c.demoMessagePlaceholder : c.messagePlaceholder}
              className={`${fieldClass} min-h-[120px] resize-y`}
            />
          </div>
        </div>

        {turnstileEnabled && (
          <div className="mt-5">
            <div className="cf-turnstile" data-sitekey={contactForm.turnstileSiteKey} data-theme="light" />
          </div>
        )}

        {status === "error" && errorMessage && (
          <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
            {errorMessage}
          </p>
        )}

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? c.sending : c.submit}
          </button>

          <p className="text-xs text-muted">
            {c.privacyNote}{" "}
            <a href={site.privacyUrl} className="font-medium text-brand hover:underline">
              {c.privacyLink}
            </a>
            .
          </p>
        </div>
      </form>
    </>
  );
}
