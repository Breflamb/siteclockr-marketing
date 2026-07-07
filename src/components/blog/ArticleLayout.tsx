import Link from "next/link";
import { site } from "@/lib/site";
import type { BlogPost } from "@/lib/blog";

export function ArticleLayout({ post, children }: { post: BlogPost; children?: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <Link href="/blog/" className="text-sm font-semibold text-brand hover:underline">
        ← Back to blog
      </Link>

      <header className="mt-6">
        <p className="text-sm text-muted">
          {new Date(post.date).toLocaleDateString("en-IE", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          · {post.readMinutes} min read
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted">{post.description}</p>
      </header>

      <div className="prose-site mt-10 space-y-8">
        {post.sections.map((section, i) => (
          <section key={i}>
            {section.heading && (
              <h2 className="text-xl font-semibold text-ink">{section.heading}</h2>
            )}
            {section.paragraphs.map((p, j) => (
              <p key={j} className={`text-base leading-relaxed text-muted ${section.heading || j > 0 ? "mt-3" : ""}`}>
                {p}
              </p>
            ))}
          </section>
        ))}
        {children}
      </div>

      <div className="mt-12 rounded-2xl border border-line bg-brand-tint/50 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-ink">Try SiteClockr on your next site</h2>
        <p className="mt-2 text-sm text-muted">
          Free to start — geofenced clock-in, QR sign-in, and CSV timesheets. Upgrade when the crew grows.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.signupUrl}
            className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover"
          >
            Start free
          </a>
          <a
            href="/#pricing"
            className="inline-flex items-center justify-center rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
          >
            See pricing
          </a>
        </div>
      </div>
    </article>
  );
}
