import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Layers, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building, Eye } from "lucide-react";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { PHASE_ONE_SEO } from "@/data/seoData";

export const metadata: Metadata = {
  title: {
    absolute: PHASE_ONE_SEO.work.title,
  },
  description: PHASE_ONE_SEO.work.description,
  keywords: [
    PHASE_ONE_SEO.work.focusKeyword,
    ...PHASE_ONE_SEO.work.supportiveKeywords.highVolume,
    ...PHASE_ONE_SEO.work.supportiveKeywords.mediumVolume,
    ...PHASE_ONE_SEO.work.supportiveKeywords.longTail,
  ],
  alternates: {
    canonical: PHASE_ONE_SEO.work.canonicalUrl,
  },
  openGraph: {
    title: PHASE_ONE_SEO.work.openGraph.title,
    description: PHASE_ONE_SEO.work.openGraph.description,
    url: PHASE_ONE_SEO.work.openGraph.url,
    siteName: "Mahadev Plastic",
    images: [
      {
        url: PHASE_ONE_SEO.work.openGraph.image,
        width: 1200,
        height: 630,
        alt: "Mahadev Plastic - Custom Acrylic Sheet Fabrication Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PHASE_ONE_SEO.work.openGraph.title,
    description: PHASE_ONE_SEO.work.openGraph.description,
    images: [PHASE_ONE_SEO.work.openGraph.image],
  },
};

const PROJECTS = [
  {
    id: 1,
    title: "Commercial Architectural Glazing & Canopies",
    category: "Architectural Glazing",
    image: "/images/2.jpg",
    sheetType: "Cast Acrylic Transparent Sheets (10mm - 15mm)",
    desc: "Precision casting and supply of heavy-gauge UV-stabilized transparent acrylic sheets for commercial atrium skylights and exterior architectural canopies, providing 93% optical clarity with exceptional storm resistance.",
  },
  {
    id: 2,
    title: "High-Visibility Retail POP & Edge-Glow Displays",
    category: "Retail Merchandising",
    image: "/images/5.jpg",
    sheetType: "Fluorescent Acrylic Sheets (Neon Green & Orange 3mm)",
    desc: "Custom edge-glowing fluorescent acrylic fabrication panels supplied to premier fashion and cosmetic brands for illuminated product pedestals and attention-grabbing retail countertop displays.",
  },
  {
    id: 3,
    title: "Glare-Free Corporate Partitions & LED Diffusers",
    category: "Interior Architecture",
    image: "/images/home1.jpg",
    sheetType: "Frosted Acrylic Sheets (Satin Matte Finish 4mm - 6mm)",
    desc: "Dual-sided matte frosted acrylic panels manufactured for corporate headquarters in Mumbai and Pune, delivering privacy between open-plan workstations while softly diffusing natural daylight.",
  },
  {
    id: 4,
    title: "Luxury Temple Mandir & Hospitality Wall Cladding",
    category: "Decorative & Heritage",
    image: "/images/home2.jpg",
    sheetType: "Mother of Pearl (MOP) Acrylic Slabs (3mm - 8mm)",
    desc: "Supply of organic pearlescent MOP acrylic slabs for bespoke residential prayer rooms (mandirs) and luxury hotel elevator lobbies, offering opulent iridescent aesthetics without marble weight.",
  },
  {
    id: 5,
    title: "Industrial Machine Safety Guards & Chemical Windows",
    category: "Industrial Engineering",
    image: "/images/ab6.webp",
    sheetType: "Heavy-Gauge Cell Cast Acrylic (12mm - 20mm)",
    desc: "Supplying shatter-resistant, stress-relieved transparent acrylic observation shields for automated CNC machining centres, packaging lines, and pharmaceutical cleanroom containment units.",
  },
  {
    id: 6,
    title: "3D Illuminated LED Channel Lettering & Signage",
    category: "Outdoor Advertising",
    image: "/images/3.jpg",
    sheetType: "Opal White & Custom Colored Acrylic Sheets (3mm)",
    desc: "Manufacture of high-diffusion opal acrylic sheets for outdoor corporate building identification fascias and 3D illuminated letters with uniform luminance and zero LED hotspot shadowing.",
  },
];

export default function OurWorkPage() {
  const workSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://mahadevplastic.com/our-work#webpage",
        url: "https://mahadevplastic.com/our-work",
        name: PHASE_ONE_SEO.work.title,
        description: PHASE_ONE_SEO.work.description,
        isPartOf: {
          "@id": "https://mahadevplastic.com/#website",
        },
        about: {
          "@type": "Organization",
          name: "Mahadev Plastic",
          description: PHASE_ONE_SEO.work.aiOverviewHook,
        },
      },
      {
        "@type": "ItemList",
        itemListElement: PROJECTS.map((proj, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: proj.title,
          description: proj.desc,
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
            name: "Our Work",
            item: "https://mahadevplastic.com/our-work",
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={workSchema} />

      <BreadcrumbBanner
        title="Our Work & Projects"
        items={[{ label: "Our Work" }]}
      />

      {/* Intro Overview Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ maxWidth: "820px", margin: "0 auto clamp(36px, 5vw, 60px)" }}>
            <span className="section-subtitle">Manufacturing Portfolio</span>
            <h1 className="section-title">
              Acrylic Sheet Fabrication Projects &amp; Manufacturing Work
            </h1>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Explore how <strong>Mahadev Plastic</strong> partners with fabricators, interior designers, and industrial engineers across India to deliver custom-calibrated acrylic sheets engineered for demanding architectural, signage, and industrial applications.
            </p>
          </div>

          {/* Project Showcase Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "clamp(20px, 2.5vw, 32px)",
            }}
          >
            {PROJECTS.map((proj) => (
              <article
                key={proj.id}
                style={{
                  backgroundColor: "var(--bg-white)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "var(--transition)",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden" }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      backgroundColor: "var(--primary)",
                      color: "#FFFFFF",
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      padding: "4px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {proj.category}
                  </div>
                </div>

                <div style={{ padding: "clamp(20px, 2.5vw, 28px)", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(18px, 1.8vw, 20px)",
                      fontWeight: 700,
                      color: "var(--primary)",
                      marginBottom: "10px",
                      lineHeight: 1.35,
                    }}
                  >
                    {proj.title}
                  </h2>

                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--accent-gold)",
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Layers size={14} />
                    <span>{proj.sheetType}</span>
                  </div>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "var(--text-muted)",
                      marginBottom: "20px",
                      flexGrow: 1,
                    }}
                  >
                    {proj.desc}
                  </p>

                  <div style={{ paddingTop: "14px", borderTop: "1px solid var(--border-light)" }}>
                    <Link
                      href="/contact-us"
                      className="product-card-link"
                    >
                      <span>Inquire About Similar Project</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Strengths Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          <div className="about-section-grid">
            <div>
              <span className="section-subtitle">Custom Manufacturing</span>
              <h2 className="section-title">
                Custom Thickness, Sizing &amp; Color Matching for Every Project
              </h2>
              <p className="section-desc">
                No project is too complex for our technical casting team. Operating from our Achhad Industrial Estate facility in Talasari, Maharashtra, we engineer customized sheet specifications tailored to your structural or visual design criteria:
              </p>

              <div className="about-features-list" style={{ marginTop: "20px", marginBottom: "28px" }}>
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>Laser-Ready Kraft Masking</span>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>Custom RAL Color Tinting</span>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>Cut-to-Size CNC Sizing</span>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>2mm to 25mm Gauges</span>
                </div>
              </div>

              <Link href="/contact-us" className="pxl-btn">
                <span>Discuss Your Project Specs</span>
                <span className="btn-icon">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>

            <div className="about-images-wrapper">
              <img
                src="/images/about/facility-2.png"
                alt="Mahadev Plastic CNC cutting, sizing and quality fabrication unit for acrylic sheets at Talasari, Maharashtra - automated masking and precision finishing"
                className="about-img-main"
                style={{ width: "100%", height: "clamp(280px, 32vw, 420px)", objectFit: "cover", borderRadius: "var(--radius-md)" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section-padding inquiry-section">
        <div className="container">
          <div className="inquiry-grid">
            <div>
              <span className="section-subtitle light">Get a Quote</span>
              <h2 className="section-title light">
                Bring Your Acrylic Project to Life With Factory Direct Supply
              </h2>
              <p className="section-desc light">
                Send us your project dimensions, required thickness, and delivery destination. Our technical sales engineers will reply with a detailed wholesale quotation.
              </p>
            </div>
            <div>
              <InquiryForm theme="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
