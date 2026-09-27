import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Target, Eye, Award, Users, Factory, ArrowRight } from "lucide-react";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { COMPANY_INFO } from "@/data/company";
import { PHASE_ONE_SEO } from "@/data/seoData";

export const metadata: Metadata = {
  title: {
    absolute: PHASE_ONE_SEO.about.title,
  },
  description: PHASE_ONE_SEO.about.description,
  keywords: [
    PHASE_ONE_SEO.about.focusKeyword,
    ...PHASE_ONE_SEO.about.supportiveKeywords.highVolume,
    ...PHASE_ONE_SEO.about.supportiveKeywords.mediumVolume,
    ...PHASE_ONE_SEO.about.supportiveKeywords.longTail,
  ],
  alternates: {
    canonical: PHASE_ONE_SEO.about.canonicalUrl,
  },
  openGraph: {
    title: PHASE_ONE_SEO.about.openGraph.title,
    description: PHASE_ONE_SEO.about.openGraph.description,
    url: PHASE_ONE_SEO.about.openGraph.url,
    siteName: "Mahadev Plastic",
    images: [
      {
        url: PHASE_ONE_SEO.about.openGraph.image,
        width: 1200,
        height: 630,
        alt: "Mahadev Plastic - Acrylic Sheet Manufacturing Company India",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: PHASE_ONE_SEO.about.openGraph.title,
    description: PHASE_ONE_SEO.about.openGraph.description,
    images: [PHASE_ONE_SEO.about.openGraph.image],
  },
};

export default function AboutUsPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://mahadevplastic.com/about-us#webpage",
        url: "https://mahadevplastic.com/about-us",
        name: PHASE_ONE_SEO.about.title,
        description: PHASE_ONE_SEO.about.description,
        isPartOf: {
          "@id": "https://mahadevplastic.com/#website",
        },
        about: {
          "@type": ["Organization", "Manufacturer"],
          name: "Mahadev Plastic",
          url: "https://mahadevplastic.com",
          foundingLocation: {
            "@type": "Place",
            name: "Talasari, Palghar, Maharashtra, India",
          },
        },
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
            name: "About Us",
            item: "https://mahadevplastic.com/about-us",
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
      <BreadcrumbBanner
        title="About Us"
        items={[{ label: "About Us" }]}
      />

      {/* Company Profile Section */}
      <section className="section-padding">
        <div className="container">
          <div className="about-section-grid">
            <div className="about-images-wrapper">
              <img
                src="/images/ab1.webp"
                alt="About Mahadev Plastic Factory"
                className="about-img-main"
              />
              <img
                src="/images/ab6.webp"
                alt="Acrylic Sheet Quality Lab"
                className="about-img-secondary"
              />
              <div className="about-badge">
                <div className="about-badge-number">100%</div>
                <div className="about-badge-text">Virgin Grade Quality</div>
              </div>
            </div>

            <div>
              <span className="section-subtitle">Who We Are</span>
              <h2 className="section-title">
                Delivering Excellence in Acrylic Engineering &amp; Manufacturing
              </h2>
              <p className="section-desc">
                <strong>Mahadev Plastic</strong> is a pioneer and trusted leader in the manufacturing and
                distribution of high-performance acrylic sheets across India. Operating from our advanced
                industrial facility in Achhad Industrial Estate (Talasari, Palghar, Maharashtra), we produce
                a diverse array of cell cast, transparent, fluorescent, frosted, and decorative acrylic materials.
              </p>
              <p className="section-desc" style={{ marginTop: "-14px" }}>
                With state-of-the-art polymer casting equipment, computerized temperature regulation, and a
                skilled team of chemical engineers and technical craftsmen, we ensure that every single sheet
                meets rigorous optical clarity, thickness uniformity, and weather durability standards.
              </p>

              <div className="about-features-list">
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>Modern Casting Lines</span>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>Strict Thickness Tolerances</span>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>Pan-India Logistics</span>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>Custom Fabrication Support</span>
                </div>
              </div>

              <div style={{ marginTop: "24px" }}>
                <Link href="/acrylic-sheets" className="pxl-btn">
                  <span>Explore Product Catalog</span>
                  <span className="btn-icon">
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: "700px", margin: "0 auto 50px" }}>
            <span className="section-subtitle">Our Purpose</span>
            <h2 className="section-title">Mission, Vision &amp; Core Strengths</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              The pillars that steer our daily production, technological upgrades, and long-term client commitments.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "30px",
            }}
          >
            {/* Card 1: Mission */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "36px 30px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(13, 27, 95, 0.1)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Target size={28} />
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: 700, color: "var(--primary)", marginBottom: "12px" }}>
                Our Mission
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.7 }}>
                To engineer and deliver the most optically clear, mechanically robust, and dimensionally accurate acrylic sheets in India, empowering our clients across signage, interior design, and manufacturing to bring their creative visions to life without compromise.
              </p>
            </div>

            {/* Card 2: Vision */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "36px 30px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(255, 202, 59, 0.2)",
                  color: "#B45309",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Eye size={28} />
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: 700, color: "var(--primary)", marginBottom: "12px" }}>
                Our Vision
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.7 }}>
                To stand as India's benchmark acrylic manufacturing brand recognized internationally for sustainable polymer processing, custom color innovation, ethical trade relationships, and lightning-fast customer support.
              </p>
            </div>

            {/* Card 3: Quality Commitment */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "36px 30px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(13, 27, 95, 0.1)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: 700, color: "var(--primary)", marginBottom: "12px" }}>
                Quality Commitment
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.7 }}>
                We test every batch against rigorous international ASTM and ISO standards for tensile strength, Rockwell hardness, solar UV yellowing resistance, and chemical tolerance. We never dilute our formulations with cheap fillers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plant & Infrastructure Section */}
      <section className="section-padding">
        <div className="container">
          <div className="about-section-grid">
            <div className="about-images-wrapper">
              <img
                src="/images/about/facility-1.png"
                alt="Mahadev Plastic modern acrylic sheet manufacturing facility at Achhad Industrial Estate, Talasari, Maharashtra - cell casting baths and cleanroom production unit"
                className="about-img-main"
                style={{ width: "100%", height: "clamp(280px, 32vw, 420px)", objectFit: "cover", borderRadius: "var(--radius-md)" }}
                loading="lazy"
              />
            </div>

            <div>
              <span className="section-subtitle">Infrastructure</span>
              <h2 className="section-title">
                Modern Manufacturing Facility in Talasari, Maharashtra
              </h2>
              <p className="section-desc">
                Strategically positioned along key transit corridors connecting Maharashtra and Gujarat,
                our factory in Achhad Industrial Estate features:
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
                <li style={{ display: "flex", gap: "12px", color: "var(--text-muted)" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>High-Precision Cell Casting Baths:</strong> Computerized thermal cycles for bubble-free, stress-relieved acrylic sheets.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", color: "var(--text-muted)" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Cleanroom Casting Environment:</strong> Filtered air intake eliminates airborne particulate contamination for 93% optical clarity.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", color: "var(--text-muted)" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Automated CNC Sizing &amp; Masking:</strong> Laser-ready kraft paper and polyethylene masking applied under vacuum pressure.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", color: "var(--text-muted)" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Bulk Inventory Warehousing:</strong> Extensive ready stock in standard thicknesses (2mm to 25mm) for expedited nationwide dispatch.</span>
                </li>
              </ul>

              <Link href="/contact-us" className="pxl-btn-accent">
                <span>Contact Factory Team</span>
                <span className="btn-icon">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section-padding inquiry-section">
        <div className="container">
          <div className="inquiry-grid">
            <div>
              <span className="section-subtitle light">Get In Touch</span>
              <h2 className="section-title light">
                Discuss Your Acrylic Requirement With Us
              </h2>
              <p className="section-desc light">
                Whether you need bulk shipments of clear sheets or specialized fluorescent colors for retail displays, our technical sales engineers are ready to assist.
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
