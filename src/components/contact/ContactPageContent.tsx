"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";
import { useCountry } from "@/components/CountryContext";
import { site } from "@/lib/site";

function ContactIntro() {
  const { m } = useCountry();
  const searchParams = useSearchParams();
  const isDemo = searchParams.get("intent") === "demo";
  const c = m.contact;

  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">Contact</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.title}</h1>
      <p className="mt-4 text-lg text-muted">{isDemo ? c.demoIntro : c.intro}</p>
      <p className="mt-3 text-sm text-muted">
        {site.contactEmail}{" "}
        <span className="text-muted/80">·</span>{" "}
        <a href={`mailto:${site.contactEmail}`} className="font-medium text-brand hover:underline">
          {m.contact.emailInstead}
        </a>
      </p>
    </>
  );
}

function ContactFormFallback() {
  return (
    <div className="rounded-2xl border border-line bg-white p-8 text-center text-sm text-muted">
      Loading form…
    </div>
  );
}

export function ContactPageContent() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:py-24">
      <Suspense fallback={<ContactFormFallback />}>
        <ContactIntro />
      </Suspense>

      <div className="mt-10">
        <Suspense fallback={<ContactFormFallback />}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
