import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — construction time tracking & site compliance",
  description:
    "Guides for contractors on GPS site clock-in, SafePass and CSCS tracking, geofencing, and getting started with SiteClockr.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "SiteClockr blog — construction time tracking & compliance",
    description:
      "Guides for contractors on GPS site clock-in, SafePass and CSCS tracking, and getting started with SiteClockr.",
    url: `${SITE_URL}/blog/`,
  },
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">Blog</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Guides for the site office
      </h1>
      <p className="mt-4 text-lg text-muted">
        Practical notes on GPS clock-in, qualification tracking, and running SiteClockr on real jobs.
      </p>

      <ul className="mt-12 space-y-8">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug} className="border-b border-line pb-8 last:border-0">
            <Link href={`/blog/${post.slug}/`} className="group block">
              <p className="text-sm text-muted">
                {new Date(post.date).toLocaleDateString("en-IE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · {post.readMinutes} min read
              </p>
              <h2 className="mt-2 text-xl font-semibold text-ink group-hover:text-brand">{post.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{post.description}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand">Read more →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
