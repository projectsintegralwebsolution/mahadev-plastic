import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import JsonLd from "@/components/JsonLd";
import { getPublicBlogs } from "@/lib/blogStorage";
import { PHASE_ONE_SEO } from "@/data/seoData";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    absolute: PHASE_ONE_SEO.blogs.title,
  },
  description: PHASE_ONE_SEO.blogs.description,
  keywords: [
    PHASE_ONE_SEO.blogs.focusKeyword,
    ...PHASE_ONE_SEO.blogs.supportiveKeywords.highVolume,
    ...PHASE_ONE_SEO.blogs.supportiveKeywords.mediumVolume,
    ...PHASE_ONE_SEO.blogs.supportiveKeywords.longTail,
  ],
  alternates: {
    canonical: PHASE_ONE_SEO.blogs.canonicalUrl,
  },
  openGraph: {
    title: PHASE_ONE_SEO.blogs.openGraph.title,
    description: PHASE_ONE_SEO.blogs.openGraph.description,
    url: PHASE_ONE_SEO.blogs.openGraph.url,
    siteName: "Mahadev Plastic",
    images: [
      {
        url: PHASE_ONE_SEO.blogs.openGraph.image,
        width: 1200,
        height: 630,
        alt: "Mahadev Plastic - Acrylic Sheets Technical Guides & Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PHASE_ONE_SEO.blogs.openGraph.title,
    description: PHASE_ONE_SEO.blogs.openGraph.description,
    images: [PHASE_ONE_SEO.blogs.openGraph.image],
  },
};

export default function BlogsPage() {
  const blogs = getPublicBlogs();

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://mahadevplastic.com/blogs#blog",
        name: PHASE_ONE_SEO.blogs.title,
        description: PHASE_ONE_SEO.blogs.description,
        url: "https://mahadevplastic.com/blogs",
        publisher: {
          "@type": "Organization",
          name: "Mahadev Plastic",
          url: "https://mahadevplastic.com",
        },
        blogPost: blogs.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: `https://mahadevplastic.com/blogs/${post.slug}`,
          datePublished: post.publishedAt || post.createdAt,
          dateModified: post.updatedAt || post.createdAt,
          description: post.excerpt,
          image: post.featuredImage,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mahadevplastic.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogs",
            item: "https://mahadevplastic.com/blogs",
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={blogSchema} />

      <BreadcrumbBanner
        title="Blogs & Technical Articles"
        items={[{ label: "Blogs" }]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ maxWidth: "820px", margin: "0 auto 50px" }}>
            <span className="section-subtitle">Industry Insights &amp; Engineering Guides</span>
            <h1 className="section-title">Acrylic Sheets Guide &amp; Technical Fabrication Insights</h1>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Explore comprehensive manufacturing articles and polymer guides by <strong>Mahadev Plastic</strong> engineers. Learn about cell cast vs extruded PMMA behavior, optimal thickness selection for glow signage, optical clarity testing, and professional acrylic machining tutorials.
            </p>
          </div>

          <div className="blogs-grid">
            {blogs.map((post) => {
              const displayDate = new Date(post.scheduledAt || post.publishedAt || post.createdAt).toLocaleDateString(
                "en-US",
                { month: "long", day: "numeric", year: "numeric" }
              );

              return (
                <article key={post.slug} className="blog-card">
                  <div className="blog-card-img-wrap">
                    <Link href={`/blogs/${post.slug}`}>
                      <img
                        src={post.featuredImage}
                        alt={post.featuredImageAlt || post.title}
                        className="blog-card-img"
                        loading="lazy"
                      />
                    </Link>
                  </div>

                  <div className="blog-card-body">
                    <div className="blog-meta-row">
                      <span className="blog-category-chip">{post.category}</span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <Calendar size={13} />
                        {displayDate}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <Clock size={13} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="blog-card-title">
                      <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="blog-card-excerpt">{post.excerpt}</p>

                    <div style={{ paddingTop: "14px", borderTop: "1px solid var(--border-light)" }}>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="product-card-link"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
