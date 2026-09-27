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

const seo = PRODUCTS_SEO["mop-acrylic-sheet"];

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
        alt: "MOP Acrylic Sheet Manufacturer in India - Mahadev Plastic",
      },
    ],
  },
};

export default function MOPAcrylicSheetPage() {
  const product = getProductBySlug("mop-acrylic-sheet")!;
  const schema = generateProductSchema("mop-acrylic-sheet");

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
                <span className="section-subtitle">Exotic Pearlescent Swirls &amp; Marble Luster</span>
                <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "var(--primary)", marginBottom: "20px" }}>
                  MOP Acrylic Sheet Manufacturer in India
                </h1>

                <div style={{ marginBottom: "30px" }}>
                  <img
                    src={product.image}
                    alt="MOP Acrylic Sheet Manufactured by Mahadev Plastic"
                    className="product-featured-img"
                  />
                </div>

                <div className="product-content-block">
                  <h2>Mother of Pearl Decorative PMMA Sheets for Luxury Mandir &amp; Furniture Cladding</h2>
                  <p>
                    Mahadev Plastic is an established <strong>MOP Acrylic Sheet Manufacturer in India</strong>, casting exotic Mother of Pearl decorative acrylic slabs that reproduce the opulent iridescent sheen, pearlescent swirls, and multidimensional depth of natural seashells.
                  </p>
                  <p>
                    Engineered from premium cell-cast PMMA infused with mica flakes and non-fading mineral colorants, our MOP sheets are 100% waterproof, termite-proof, and stain-resistant. They offer a lightweight, easy-to-install alternative to heavy marble slabs or delicate shell inlays for temple (mandir) sanctuaries, luxury kitchen shutters, and hotel lobby feature walls. For structural industrial requirements, explore our{" "}
                    <Link href="/cast-acrylic-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      cell cast acrylic sheets
                    </Link>
                    , or browse our{" "}
                    <Link href="/acrylic-transparent-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      clear transparent acrylic sheets
                    </Link>{" "}
                    for showcase covers.
                  </p>
                </div>
              </div>

              <div className="product-content-block">
                <h2>Craftsmanship &amp; Fabrication Advantages</h2>
                <p>
                  Our MOP sheets can be cleanly cut with standard carbide saw blades, CNC routers, or laser cutters, and thermoformed into gentle curves without surface crazing or color fading. They provide seamless edge bonding and wipe-clean maintenance using mild soapy water.
                </p>
              </div>

              <div className="product-content-block">
                <h2>Key Features &amp; Aesthetics</h2>
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
                <h2>Pattern Variations &amp; Technical Specifications</h2>
                <div className="table-responsive">
                  <table className="specs-table">
                    <thead>
                      <tr>
                        <th>Property Parameter</th>
                        <th>Specification Standard</th>
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
                <h2>Luxury Interior &amp; Temple Mandir Applications</h2>
                <p>
                  Specified by high-end interior designers and temple artisans across Gujarat, Maharashtra, Rajasthan, and nationwide for puja room backdrops, wardrobe shutter overlays, and vanity counters. Discover completed examples in our{" "}
                  <Link href="/our-work" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                    project gallery
                  </Link>{" "}
                  or explore our{" "}
                  <Link href="/our-clients" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                    architectural client network
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
                productTitle="MOP Acrylic Sheets"
                categorySlug="mop-acrylic-sheet"
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
