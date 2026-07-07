import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";
import { CountrySelect } from "@/components/CountryContext";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <CountrySelect />
          <a
            href={site.loginUrl}
            className="text-sm font-semibold text-ink transition-colors hover:text-brand"
          >
            Log in
          </a>
          <a
            href={site.signupUrl}
            className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover"
          >
            Start free
          </a>
        </div>

        {/* Mobile menu (CSS-only, no JS needed for static export) */}
        <details className="group relative md:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-line text-ink [&::-webkit-details-marker]:hidden"
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-xl border border-line bg-white p-2 shadow-xl">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-brand-tint"
              >
                {item.label}
              </a>
            ))}
            <div className="my-2 h-px bg-line" />
            <div className="px-3 py-2">
              <CountrySelect className="w-full [&_select]:w-full" />
            </div>
            <a href={site.loginUrl} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-brand-tint">
              Log in
            </a>
            <a
              href={site.signupUrl}
              className="mt-1 block rounded-lg bg-brand px-3 py-2 text-center text-sm font-semibold text-white hover:bg-brand-hover"
            >
              Start free
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
