import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, Layers, ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ProductSidebar from "@/components/ProductSidebar";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import ProductFaqAccordion from "@/components/ProductFaqAccordion";
import { getProductBySlug } from "@/data/products";
import { PRODUCTS_SEO, generateProductSchema } from "@/data/seoData";

const seo = PRODUCTS_SEO["acrylic-transparent-sheet"];

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
        alt: "Acrylic Transparent Sheet Manufacturer in India - Mahadev Plastic",
      },
    ],
  },
};

export default function AcrylicTransparentSheetPage() {
  const product = getProductBySlug("acrylic-transparent-sheet")!;
  const schema = generateProductSchema("acrylic-transparent-sheet");

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
                <span className="section-subtitle">Ultra-Clear Optical Grade (93% Light Transmission)</span>
                <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "var(--primary)", marginBottom: "20px" }}>
                  Acrylic Transparent Sheet Manufacturer in India
                </h1>

                <div style={{ marginBottom: "30px" }}>
                  <img
                    src={product.image}
                    alt="Acrylic Transparent Sheet Manufactured by Mahadev Plastic"
                    className="product-featured-img"
                  />
                </div>

                <div className="product-content-block">
                  <h2>Crystal-Clear PMMA Sheets with Superior Light Transmission</h2>
                  <p>
                    Mahadev Plastic is a leading <strong>Acrylic Transparent Sheet Manufacturer in India</strong>, casting premium polymethyl methacrylate sheets that provide up to 93% luminous transmission—outperforming traditional float glass while being half the weight and over 10 times more impact-resistant.
                  </p>
                  <p>
                    Produced using pure virgin MMA monomer in our automated Talasari plant, our transparent acrylic sheets are completely free of internal optical distortion, air bubbles, or haze. They are extensively specified by signage companies, interior architects, and industrial equipment builders who require glass-like aesthetics with shatterproof structural resilience. If your application calls for higher molecular density or extreme chemical resistance, consider our{" "}
                    <Link href="/cast-acrylic-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      cell cast acrylic sheets
                    </Link>
                    , or explore our{" "}
                    <Link href="/frosted-acrylic-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      frosted acrylic sheets
                    </Link>{" "}
                    for glare-free privacy partitions.
                  </p>
                </div>
              </div>

              {product.manufacturingProcess && (
                <div className="product-content-block">
                  <h2>How We Manufacture Acrylic Transparent Sheets</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
                    {product.manufacturingProcess.map((step, idx) => (
                      <div key={idx} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <div
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "13px",
                            fontWeight: 700,
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        >
                          {idx + 1}
                        </div>
                        <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.6 }}>
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="product-content-block">
                <h2>Key Features &amp; Optical Properties</h2>
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
                <h2>Technical Specifications &amp; Lab Test Standards</h2>
                <div className="table-responsive">
                  <table className="specs-table">
                    <thead>
                      <tr>
                        <th>Technical Parameter</th>
                        <th>Tested Value / Range</th>
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
                <h2>Recommended Commercial &amp; Industrial Applications</h2>
                <p>
                  From high-end retail display vitrines and museum display cases to safety machine enclosures and corporate partitions, our clear acrylic sheets deliver dependable durability. See examples in our{" "}
                  <Link href="/our-work" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                    fabrication portfolio
                  </Link>{" "}
                  or learn about our bulk supplies to{" "}
                  <Link href="/our-clients" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                    commercial partners
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
                productTitle="Acrylic Transparent Sheets"
                categorySlug="acrylic-transparent-sheet"
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
