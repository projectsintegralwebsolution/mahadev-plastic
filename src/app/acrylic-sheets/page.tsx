import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, ArrowRight, Layers, ShieldCheck, Sparkles } from "lucide-react";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ProductSidebar from "@/components/ProductSidebar";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import ProductFaqAccordion from "@/components/ProductFaqAccordion";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { PRODUCTS_SEO, generateProductSchema } from "@/data/seoData";

const seo = PRODUCTS_SEO["acrylic-sheets"];

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
        alt: "Acrylic Sheets Manufacturer in India - Mahadev Plastic",
      },
    ],
  },
};

export default function AcrylicSheetsPage() {
  const mainProduct = getProductBySlug("acrylic-sheets") || PRODUCTS[0];
  const schema = generateProductSchema("acrylic-sheets");

  return (
    <>
      {schema && <JsonLd schema={schema} />}
      <BreadcrumbBanner
        title="Acrylic Sheets"
        items={[{ label: "Products", href: "/acrylic-sheets" }, { label: "Acrylic Sheets" }]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="product-details-grid">
            {/* Left Sidebar */}
            <ProductSidebar currentSlug="acrylic-sheets" />

            {/* Right Main Content */}
            <div className="product-main-content">
              <div>
                <span className="section-subtitle">Factory Direct Polymer Extrusion &amp; Cell Casting</span>
                <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "var(--primary)", marginBottom: "20px" }}>
                  Acrylic Sheets Manufacturer &amp; Wholesale Supplier in India
                </h1>

                <div style={{ marginBottom: "30px" }}>
                  <img
                    src="/images/Acrylic-Sheets.jpg"
                    alt="Acrylic Sheets Range Manufactured by Mahadev Plastic"
                    className="product-featured-img"
                  />
                </div>

                <div className="product-content-block">
                  <h2>Engineered for Industrial Performance &amp; Architectural Clarity</h2>
                  <p>
                    Mahadev Plastic is a recognized <strong>Acrylic Sheet Manufacturer in India</strong>, operating precision polymer casting and extrusion facilities in Achhad Industrial Estate, Talasari, Maharashtra. We manufacture standard and bespoke acrylic sheets (PMMA) formulated exclusively with 100% virgin methyl methacrylate monomer to guarantee up to 93% optical clarity, dimensional stability, and zero yellowing over decades of interior and outdoor use.
                  </p>
                  <p>
                    Whether your application demands crystal-clear transparency for{" "}
                    <Link href="/acrylic-transparent-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      architectural glazing
                    </Link>
                    , heavy-duty chemical resilience in{" "}
                    <Link href="/cast-acrylic-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      cell cast industrial panels
                    </Link>
                    , glare-free luminaire diffusers in{" "}
                    <Link href="/frosted-acrylic-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      frosted sheets
                    </Link>
                    , or radiant edge-glow signage in{" "}
                    <Link href="/fluorescent-acrylic-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      fluorescent acrylic
                    </Link>
                    , our nationwide distribution network supplies fabricators, OEMs, and signage printers across Mumbai, Delhi, Ahmedabad, Bengaluru, and pan-India with dependable factory wholesale pricing.
                  </p>
                </div>
              </div>

              {/* Sub-product Category Showcase Cards with crawlable links */}
              <div className="product-content-block">
                <h2>Our Specialized Acrylic Sheet Product Portfolio</h2>
                <p>
                  Explore each specialized sheet grade below to inspect technical datasheets, thickness charts, and fabrication guidelines:
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
                    gap: "24px",
                    marginTop: "20px",
                  }}
                >
                  {PRODUCTS.filter((p) => p.slug !== "acrylic-sheets").map((prod) => (
                    <div
                      key={prod.id}
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid var(--border-light)",
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        boxShadow: "var(--shadow-sm)",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div style={{ height: "180px", overflow: "hidden" }}>
                        <img
                          src={prod.image}
                          alt={prod.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <div style={{ padding: "20px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: 700, color: "var(--primary)", marginBottom: "8px" }}>
                          <Link href={`/${prod.slug}`}>{prod.title}</Link>
                        </h3>
                        <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "16px", flexGrow: 1 }}>
                          {prod.shortDescription}
                        </p>
                        <Link href={`/${prod.slug}`} className="btn-outline" style={{ padding: "8px 16px", fontSize: "12px", width: "fit-content" }}>
                          <span>Explore {prod.title}</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features & Advantages */}
              <div className="product-content-block">
                <h2>Key Features &amp; Performance Benefits</h2>
                <div className="about-features-list" style={{ marginTop: "16px" }}>
                  {mainProduct.features.map((feat, idx) => (
                    <div key={idx} className="about-feature-item">
                      <span className="about-feature-icon">
                        <CheckCircle2 size={16} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="product-content-block">
                <h2>Technical Specifications &amp; Quality Parameters</h2>
                <div className="table-responsive">
                  <table className="specs-table">
                    <thead>
                      <tr>
                        <th>Property / Parameter</th>
                        <th>Specification Standard</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mainProduct.specifications.map((spec, idx) => (
                        <tr key={idx}>
                          <td>{spec.label}</td>
                          <td>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Applications */}
              <div className="product-content-block">
                <h2>Industry Applications &amp; Commercial Uses</h2>
                <p>
                  Our acrylic sheets are supplied across India for leading commercial applications. Review our real-world case studies in our{" "}
                  <Link href="/our-work" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                    fabrication project showcase
                  </Link>{" "}
                  or explore our{" "}
                  <Link href="/our-clients" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                    client partner sectors
                  </Link>
                  .
                </p>
                <div className="app-cards-grid" style={{ marginTop: "16px" }}>
                  {mainProduct.applications.map((app, idx) => (
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
                productTitle="Acrylic Sheets"
                categorySlug="acrylic-sheets"
              />

              {/* Product Inquiry Form */}
              <div style={{ marginTop: "36px" }}>
                <InquiryForm initialProduct="Acrylic Sheets" theme="light" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
