import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ProductSidebar from "@/components/ProductSidebar";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import ProductFaqAccordion from "@/components/ProductFaqAccordion";
import { getProductBySlug } from "@/data/products";
import { PRODUCTS_SEO, generateProductSchema } from "@/data/seoData";

const seo = PRODUCTS_SEO["frosted-acrylic-sheet"];

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
        alt: "Frosted Acrylic Sheet Manufacturer in India - Mahadev Plastic",
      },
    ],
  },
};

export default function FrostedAcrylicSheetPage() {
  const product = getProductBySlug("frosted-acrylic-sheet")!;
  const schema = generateProductSchema("frosted-acrylic-sheet");

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
                <span className="section-subtitle">Silky Matte Satin Finish &amp; Uniform Light Scattering</span>
                <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "var(--primary)", marginBottom: "20px" }}>
                  Frosted Acrylic Sheet Manufacturer in India
                </h1>

                <div style={{ marginBottom: "30px" }}>
                  <img
                    src={product.image}
                    alt="Frosted Acrylic Sheet Manufactured by Mahadev Plastic"
                    className="product-featured-img"
                  />
                </div>

                <div className="product-content-block">
                  <h2>Satin Matte PMMA Engineered for Glare-Free LED Diffusion &amp; Architectural Privacy</h2>
                  <p>
                    Mahadev Plastic is a leading <strong>Frosted Acrylic Sheet Manufacturer in India</strong>, producing single-sided and double-sided matte satin acrylic sheets. Our proprietary surface texturing provides 50% to 75% light transmission while completely diffusing LED diode pixelation and eliminating harsh reflections.
                  </p>
                  <p>
                    Unlike sandblasted or acid-etched glass which is heavy, brittle, and prone to fingerprint staining, our frosted sheets are 10 times more impact-resistant, lightweight, and naturally resist oil smudges. For crystal-clear showcase displays, compare our{" "}
                    <Link href="/acrylic-transparent-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      clear transparent acrylic sheets
                    </Link>
                    , or explore our{" "}
                    <Link href="/fluorescent-acrylic-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      fluorescent acrylic sheets
                    </Link>{" "}
                    for high-impact illuminated accents.
                  </p>
                </div>
              </div>

              <div className="product-content-block">
                <h2>Performance Advantages Over Traditional Etched Glass</h2>
                <p>
                  Designed as an elegant modern alternative to heavy architectural glass, our Frosted Acrylic Sheets combine velvety satin texture with structural durability. They reduce glare in corporate workspaces, provide acoustic dampening, and maintain consistent optical diffusion even after heat bending or line forming.
                </p>
              </div>

              <div className="product-content-block">
                <h2>Key Features &amp; Performance Strengths</h2>
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
                <h2>Specifications &amp; Availability Standards</h2>
                <div className="table-responsive">
                  <table className="specs-table">
                    <thead>
                      <tr>
                        <th>Property Specification</th>
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
                <h2>Commercial &amp; Interior Design Applications</h2>
                <p>
                  Our frosted acrylic sheets are installed nationwide across executive corporate offices, hospital partition dividers, luxury retail cosmetics counters, and modern residential doors. Inspect real installations in our{" "}
                  <Link href="/our-work" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                    project portfolio
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
                productTitle="Frosted Acrylic Sheets"
                categorySlug="frosted-acrylic-sheet"
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
