import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, Layers, ShieldCheck, ArrowRight, Wrench } from "lucide-react";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ProductSidebar from "@/components/ProductSidebar";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import ProductFaqAccordion from "@/components/ProductFaqAccordion";
import { getProductBySlug } from "@/data/products";
import { PRODUCTS_SEO, generateProductSchema } from "@/data/seoData";

const seo = PRODUCTS_SEO["cast-acrylic-sheet"];

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
        alt: "Cast Acrylic Sheet Manufacturer in India - Mahadev Plastic",
      },
    ],
  },
};

export default function CastAcrylicSheetPage() {
  const product = getProductBySlug("cast-acrylic-sheet")!;
  const schema = generateProductSchema("cast-acrylic-sheet");

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
                <span className="section-subtitle">Cell Cast Polymer Engineering (High Molecular Weight)</span>
                <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "var(--primary)", marginBottom: "20px" }}>
                  Cast Acrylic Sheet Manufacturer in India
                </h1>

                <div style={{ marginBottom: "30px" }}>
                  <img
                    src={product.image}
                    alt="Cast Acrylic Sheet Manufactured by Mahadev Plastic"
                    className="product-featured-img"
                  />
                </div>

                <div className="product-content-block">
                  <h2>Heavy-Duty Cell-Cast PMMA Engineered for CNC Machining &amp; Chemical Resistance</h2>
                  <p>
                    Mahadev Plastic is a premier <strong>Cast Acrylic Sheet Manufacturer in India</strong>, specializing in the cell-casting method between optically flat tempered glass molds. This process yields polymer chains with substantially higher molecular weight than standard extruded acrylic, resulting in exceptional 75 MPa tensile strength, superior thermal tolerance, and resistance to chemical solvents.
                  </p>
                  <p>
                    For CNC routing, high-speed milling, and CO2 laser engraving, our cell cast sheets deliver pristine, chip-free cuts without edge gumming or melting. If your project prioritizes maximum light transmission for display covers, explore our{" "}
                    <Link href="/acrylic-transparent-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      transparent acrylic sheets
                    </Link>
                    , or browse our{" "}
                    <Link href="/fluorescent-acrylic-sheet" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                      fluorescent acrylic sheets
                    </Link>{" "}
                    for high-visibility edge-glow brand logos.
                  </p>
                </div>
              </div>

              <div className="product-content-block">
                <h2>Our Cell-Cast Acrylic Manufacturing Infrastructure</h2>
                <p>
                  Liquid virgin methyl methacrylate (MMA) monomer is introduced into glass mold cells with precision perimeter elastomer gaskets. The cells are subjected to controlled multi-stage exothermic polymerization cycles in temperature-regulated water tanks followed by high-temperature air autoclaves.
                </p>
                <p>
                  This rigorous curing sequence completely relieves internal residual stresses, ensuring uniform thickness tolerances across large 8x4 ft and 2000x3000 mm sheet formats.
                </p>
              </div>

              <div className="product-content-block">
                <h2>Key Mechanical &amp; Optical Strengths</h2>
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
                <h2>Technical Specifications &amp; Performance Standards</h2>
                <div className="table-responsive">
                  <table className="specs-table">
                    <thead>
                      <tr>
                        <th>Property Parameter</th>
                        <th>Tested Standard Value</th>
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
                <h2>Industrial &amp; Architectural Applications</h2>
                <p>
                  Our cell cast acrylic sheets are deployed across India in heavy-duty machine shields, architectural canopy domes, chemical observation ports, and illuminated 3D channel signage. Review our{" "}
                  <Link href="/our-work" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>
                    completed industrial projects
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
                productTitle="Cast Acrylic Sheets"
                categorySlug="cast-acrylic-sheet"
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
