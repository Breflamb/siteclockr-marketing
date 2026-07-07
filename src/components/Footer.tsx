import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-brand-tint/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">{site.description}</p>
          <p className="mt-4 text-sm text-muted">
            <a href={`mailto:${site.contactEmail}`} className="font-medium text-brand hover:underline">
              {site.contactEmail}
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Product</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={site.loginUrl} className="text-muted hover:text-brand">Log in</a>
            </li>
            <li>
              <a href={site.signupUrl} className="text-muted hover:text-brand">Start free</a>
            </li>
            <li>
              <a href={site.privacyUrl} className="text-muted hover:text-brand">Privacy</a>
            </li>
            <li>
              <a href={site.gdprUrl} className="text-muted hover:text-brand">GDPR</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Made in Ireland for construction & field teams.</p>
        </div>
      </div>
    </footer>
  );
}
