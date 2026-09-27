import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, Layers, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ProductSidebar from "@/components/ProductSidebar";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import ProductFaqAccordion from "@/components/ProductFaqAccordion";
import { getProductBySlug } from "@/data/products";
import { PRODUCTS_SEO, generateProductSchema } from "@/data/seoData";

const seo = PRODUCTS_SEO["fluorescent-acrylic-sheet"];

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  keywords: [
    seo.focusKeyword,
    ...seo.supportiveKeywords.highVolume,
    ...seo.supportiveKeywords.mediumVolume,
    ...seo.supportiveKeywords.longTail,
  ],
  alternates: {
    canonical: seo.canonicalUrl,
  },
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    url: seo.openGraph.url,
    images: [
      {
        url: seo.openGraph.image,
        width: 1200,
        height: 630,
        alt: "Fluorescent Acrylic Sheet Manufacturer in India - Mahadev Plastic",
      },
    ],
  },
};

export default function FluorescentAcrylicSheetPage() {
  const product = getProductBySlug("fluorescent-acrylic-sheet")!;
  const schema = generateProductSchema("fluorescent-acrylic-sheet");

  return (
    <>
      {schema && <JsonLd schema={schema} />}
      <BreadcrumbBanner
        title={product.title}
        items={[
          { label: "Products", href: "/acrylic-sheets" },
          { label: product.title },
        ]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="product-details-grid">
            <ProductSidebar currentSlug={product.slug} />

            <div className="product-main-content">
              <div>
                <span className="section-subtitle">Light-Gathering Ambient Edge-Glow Technology</span>
                <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "var(--primary)", marginBottom: "20px" }}>
                  Fluorescent Acrylic Sheet Manufacturer in India
                </h1>

                <div style={{ marginBottom: "30px" }}>
                  <img
                    src={product.image}
                    alt="Fluorescent Acrylic Sheet Manufactured by Mahadev Plastic"
                    className="product-featured-img"
                  />
                </div>

                <div className="product-content-block">
                  <h2>Radiant Edge-Glow PMMA Sheets for High-Impact Retail &amp; Signage Displays</h2>
                  <p>
                    Mahadev Plastic is a premier <strong>Fluorescent Acrylic Sheet Manufacturer in India</strong>, casting luminous colored acrylic sheets embedded with advanced light-gathering fluorophore chemistry. Ambient room light is captured across the sheet faces and concentrated along the edges via total internal reflection, creating a vibrant perimeter glow without any internal wiring or LED bulbs.
                  </p>
                  <p>
                    Under 365nm–395nm UV blacklight or blue light lamps, our fluorescent sheets exhibit intense luminescence. They are widely used for illuminated brand logos, futuristic bar shelves, and high-end cosmetic counters. For crystal-clear display pedestals, pair with our{" "}
                    <Link href="/acrylic-transparent-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      clear transparent acrylic sheets
                    </Link>
                    , or explore our{" "}
                    <Link href="/frosted-acrylic-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      frosted acrylic sheets
                    </Link>{" "}
                    for soft backlighting balance.
                  </p>
                </div>
              </div>

              <div className="product-content-block">
                <h2>Laser Engraving &amp; Fabrication Characteristics</h2>
                <p>
                  When fluorescent acrylic is laser engraved or CNC routed, the surface disruption redirects internal light upward through the etched contours. This causes vector brand lettering and logos to radiate with the same brilliant luminescence as the sheet edges.
                </p>
              </div>

              <div className="product-content-block">
                <h2>Features and Performance Strengths</h2>
                <div className="about-features-list" style={{ marginTop: "16px" }}>
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="about-feature-item">
                      <span className="about-feature-icon">
                        <CheckCircle2 size={16} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-content-block">
                <h2>Available Neon Colors &amp; Specifications</h2>
                <div className="table-responsive">
                  <table className="specs-table">
                    <thead>
                      <tr>
                        <th>Specification Property</th>
                        <th>Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.map((spec, idx) => (
                        <tr key={idx}>
                          <td>{spec.label}</td>
                          <td>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="product-content-block">
                <h2>Commercial Retail &amp; Signage Applications</h2>
                <p>
                  From premier cosmetic point-of-purchase stands and nightclub bar backdrops to laser edge-lit signs, our fluorescent sheets command customer attention across India. Inspect real retail examples in our{" "}
                  <Link href="/our-work" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                    fabrication project showcase
                  </Link>{" "}
                  or explore our{" "}
                  <Link href="/our-clients" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                    commercial client sectors
                  </Link>
                  .
                </p>
                <div className="app-cards-grid" style={{ marginTop: "16px" }}>
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="app-card">
                      <Layers size={18} style={{ color: "var(--primary)", flexShrink: 0 }} />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Dedicated B2B FAQs Accordion */}
              <ProductFaqAccordion
                faqs={seo.faqs}
                productTitle="Fluorescent Acrylic Sheets"
                categorySlug="fluorescent-acrylic-sheet"
              />

              <div style={{ marginTop: "36px" }}>
                <InquiryForm initialProduct={product.title} theme="light" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
