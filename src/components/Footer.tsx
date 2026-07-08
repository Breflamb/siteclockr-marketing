"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";
import { useCountry } from "@/components/CountryContext";

export function Footer() {
  const { m } = useCountry();
  const f = m.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-brand-tint/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">{f.description}</p>
          <p className="mt-4 text-sm text-muted">
            <a href={`mailto:${site.contactEmail}`} className="font-medium text-brand hover:underline">
              {site.contactEmail}
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{f.product}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {m.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/blog/" className="text-muted hover:text-brand">
                {m.header.blog}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{f.company}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={site.loginUrl} className="text-muted hover:text-brand">{m.header.login}</a>
            </li>
            <li>
              <a href={site.signupUrl} className="text-muted hover:text-brand">{m.header.startFree}</a>
            </li>
            <li>
              <a href={site.privacyUrl} className="text-muted hover:text-brand">{f.privacy}</a>
            </li>
            <li>
              <a href={site.gdprUrl} className="text-muted hover:text-brand">{f.gdpr}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6">
          <p>{f.copyright(year, site.name)}</p>
          <p>{f.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
