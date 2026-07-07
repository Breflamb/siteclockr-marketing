import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { getAllSlugs, getPost } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Metadata | Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPost(slug);
    if (!post) return {};

    return {
      title: post.title,
      description: post.description,
      alternates: { canonical: `/blog/${post.slug}/` },
      openGraph: {
        title: post.title,
        description: post.description,
        url: `${SITE_URL}/blog/${post.slug}/`,
        type: "article",
        publishedTime: post.date,
      },
    };
  });
}

function articleJsonLd(post: NonNullable<ReturnType<typeof getPost>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}/`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <ArticleLayout post={post} />
    </>
  );
}
