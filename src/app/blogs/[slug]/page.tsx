import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { getBlogBySlug, getPublicBlogs } from "@/lib/blogStorage";

export const dynamic = "force-dynamic";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const publicBlogs = getPublicBlogs();
  return publicBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogBySlug(params.slug, true);
  if (!post) {
    return { title: "Blog Post Not Found | Mahadev Plastic" };
  }

  const title = post.metaTitle || `${post.title} | Mahadev Plastic`;
  const description = post.metaDescription || post.excerpt;
  const canonical = post.canonicalUrl || `https://mahadevplastic.com/blogs/${post.slug}`;
  const keywords = [
    post.focusKeyword,
    ...(post.supportiveKeywords?.highVolume || []),
    ...(post.supportiveKeywords?.mediumVolume || []),
    ...(post.supportiveKeywords?.longTail || []),
    ...(post.tags || []),
  ].filter(Boolean);

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Mahadev Plastic",
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt || post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt || post.createdAt,
      modifiedTime: post.updatedAt || post.createdAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.featuredImage],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogBySlug(params.slug, false);

  if (!post) {
    notFound();
  }

  const allPublic = getPublicBlogs();
  const relatedPosts = allPublic
    .filter((b) => b.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  const displayDate = new Date(post.scheduledAt || post.publishedAt || post.createdAt).toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" }
  );

  // Construct Structured Data Graph
  const schemaGraph: any[] = [
    {
      "@type": post.schemaType || "BlogPosting",
      "@id": `https://mahadevplastic.com/blogs/${post.slug}#article`,
      headline: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      image: post.featuredImage.startsWith("http")
        ? post.featuredImage
        : `https://mahadevplastic.com${post.featuredImage}`,
      datePublished: post.publishedAt || post.createdAt,
      dateModified: post.updatedAt || post.createdAt,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://mahadevplastic.com/blogs/${post.slug}`,
      },
      author: {
        "@type": "Organization",
        name: post.author || "Mahadev Plastic",
        url: "https://mahadevplastic.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Mahadev Plastic",
        url: "https://mahadevplastic.com",
        logo: {
          "@type": "ImageObject",
          url: "https://mahadevplastic.com/images/mahade-logo.png",
        },
      },
      keywords: [
        post.focusKeyword,
        ...(post.supportiveKeywords?.highVolume || []),
        ...(post.supportiveKeywords?.longTail || []),
      ]
        .filter(Boolean)
        .join(", "),
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
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `https://mahadevplastic.com/blogs/${post.slug}`,
        },
      ],
    },
  ];

  // Ingest FAQPage Schema if FAQs exist
  if (post.faqs && post.faqs.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      "@id": `https://mahadevplastic.com/blogs/${post.slug}#faq`,
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  // Parse custom schema if provided
  let customSchemaObj = null;
  if (post.customSchema) {
    try {
      customSchemaObj = JSON.parse(post.customSchema);
    } catch (e) {
      console.error("Invalid custom schema in blog post:", e);
    }
  }

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": schemaGraph }} />
      {customSchemaObj && <JsonLd data={customSchemaObj} />}

      <BreadcrumbBanner
        title={post.title}
        items={[
          { label: "Blogs", href: "/blogs" },
          { label: post.title.slice(0, 35) + "..." },
        ]}
      />

      <section className="section-padding">
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* Back & Meta header */}
          <div style={{ marginBottom: "24px" }}>
            <Link
              href="/blogs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--primary)",
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: "16px",
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to all articles</span>
            </Link>

            <div className="blog-meta-row" style={{ marginTop: "10px", fontSize: "14px" }}>
              <span className="blog-category-chip">{post.category}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Calendar size={14} />
                {displayDate}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Clock size={14} />
                {post.readTime}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <User size={14} />
                {post.author}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(24px, 4.2vw, 38px)",
                fontWeight: 800,
                lineHeight: 1.25,
                color: "var(--primary)",
                marginTop: "16px",
                marginBottom: "24px",
              }}
            >
              {post.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div style={{ marginBottom: "36px", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
            <img
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              style={{ width: "100%", maxHeight: "440px", objectFit: "cover" }}
            />
          </div>

          {/* Rich HTML Content Body */}
          <div
            className="blog-article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: "17px",
              lineHeight: 1.85,
              color: "var(--text-muted)",
              borderBottom: "1px solid var(--border-light)",
              paddingBottom: "40px",
              marginBottom: "50px",
            }}
          />

          {/* Interactive FAQs Accordion Section if available */}
          {post.faqs && post.faqs.length > 0 && (
            <div style={{ marginBottom: "50px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <HelpCircle size={24} style={{ color: "var(--accent)" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "var(--primary)",
                    margin: 0,
                  }}
                >
                  Frequently Asked Questions
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {post.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: "var(--bg-light)",
                      borderRadius: "8px",
                      padding: "20px",
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "var(--primary)",
                        margin: "0 0 8px",
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "var(--text-muted)" }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--primary)",
                  marginBottom: "24px",
                }}
              >
                Related Articles
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "20px",
                  marginBottom: "50px",
                }}
              >
                {relatedPosts.map((rel) => (
                  <div
                    key={rel.slug}
                    style={{
                      backgroundColor: "var(--bg-light)",
                      borderRadius: "var(--radius-sm)",
                      padding: "20px",
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 700 }}>
                      {rel.category}
                    </span>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "16px", fontWeight: 700, margin: "8px 0" }}>
                      <Link href={`/blogs/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <Link
                      href={`/blogs/${rel.slug}`}
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "var(--primary)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        textDecoration: "none",
                      }}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Product Consultation Box */}
          <InquiryForm theme="light" />
        </div>
      </section>
    </>
  );
}
