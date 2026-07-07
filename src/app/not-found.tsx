import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink">Page not found</h1>
      <p className="mt-4 text-muted">
        That link doesn&apos;t go anywhere on {site.name}. Head back to the homepage or get in touch if you need help.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover"
        >
          Back to home
        </Link>
        <a
          href={`mailto:${site.contactEmail}`}
          className="inline-flex items-center justify-center rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
        >
          Contact us
        </a>
      </div>
    </div>
  );
}
