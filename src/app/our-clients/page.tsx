import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Building2, Sparkles, Store, ShieldCheck, Factory, CheckCircle2, ArrowRight, Award } from "lucide-react";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { PHASE_ONE_SEO } from "@/data/seoData";

export const metadata: Metadata = {
  title: {
    absolute: PHASE_ONE_SEO.clients.title,
  },
  description: PHASE_ONE_SEO.clients.description,
  keywords: [
    PHASE_ONE_SEO.clients.focusKeyword,
    ...PHASE_ONE_SEO.clients.supportiveKeywords.highVolume,
    ...PHASE_ONE_SEO.clients.supportiveKeywords.mediumVolume,
    ...PHASE_ONE_SEO.clients.supportiveKeywords.longTail,
  ],
  alternates: {
    canonical: PHASE_ONE_SEO.clients.canonicalUrl,
  },
  openGraph: {
    title: PHASE_ONE_SEO.clients.openGraph.title,
    description: PHASE_ONE_SEO.clients.openGraph.description,
    url: PHASE_ONE_SEO.clients.openGraph.url,
    siteName: "Mahadev Plastic",
    images: [
      {
        url: PHASE_ONE_SEO.clients.openGraph.image,
        width: 1200,
        height: 630,
        alt: "Mahadev Plastic - Our Clients & Commercial Partners Across India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PHASE_ONE_SEO.clients.openGraph.title,
    description: PHASE_ONE_SEO.clients.openGraph.description,
    images: [PHASE_ONE_SEO.clients.openGraph.image],
  },
};

const CLIENT_SECTORS = [
  {
    icon: Sparkles,
    title: "Signage, Advertising & LED Channel Letters",
    desc: "Supplying premier cell cast clear, opal white, and vibrant edge-glow fluorescent acrylic sheets to commercial signmakers and digital printing houses for weatherproof outdoor fascias and illuminated 3D channel letters.",
    sheetsSupplied: "Cast Clear, Opal White Diffuser, Fluorescent Edge Glow",
  },
  {
    icon: Building2,
    title: "Architectural & Interior Design Contractors",
    desc: "Partnering with interior architects and fit-out contractors for frosted privacy partitions, acoustic barriers, ceiling louvers, and bespoke Mother of Pearl decorative panels across corporate offices and luxury residences.",
    sheetsSupplied: "Frosted Satin Matte, MOP Decorative Slabs, Heavy Gauge Clear",
  },
  {
    icon: Store,
    title: "Retail Brands & POP Display Fabricators",
    desc: "Equipping retail fixtures and cosmetic merchandisers with optically flawless PMMA sheets for perfume showcases, display pedestals, branded vitrines, and countertop POS stands.",
    sheetsSupplied: "Transparent High-Gloss, Fluorescent Neon, Custom Tinted",
  },
  {
    icon: Factory,
    title: "Industrial Machinery & OEM Equipment Builders",
    desc: "Delivering dimensionally calibrated, shatter-resistant cast acrylic sheets for transparent machine observation windows, laser safety barriers, laboratory enclosures, and chemical sight glasses.",
    sheetsSupplied: "6mm–25mm Heavy Gauge Cast Acrylic, Scratch Resistant",
  },
  {
    icon: Award,
    title: "Luxury Furniture & Temple Mandir Artisans",
    desc: "Supplying artisanal furniture makers and mandir sculptors with exotic Mother of Pearl (MOP) and marbled acrylic laminates that combine timeless heritage aesthetics with modern polymer durability.",
    sheetsSupplied: "MOP Acrylic Sheets, Pearlescent Laminates, Translucent Sheets",
  },
];

export default function OurClientsPage() {
  const clientsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://mahadevplastic.com/our-clients#webpage",
        url: "https://mahadevplastic.com/our-clients",
        name: PHASE_ONE_SEO.clients.title,
        description: PHASE_ONE_SEO.clients.description,
        isPartOf: {
          "@id": "https://mahadevplastic.com/#website",
        },
        about: {
          "@type": "Organization",
          name: "Mahadev Plastic",
          description: PHASE_ONE_SEO.clients.aiOverviewHook,
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
            name: "Our Clients",
            item: "https://mahadevplastic.com/our-clients",
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={clientsSchema} />

      <BreadcrumbBanner
        title="Our Clients & Partners"
        items={[{ label: "Our Clients" }]}
      />

      {/* Intro Overview Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ maxWidth: "820px", margin: "0 auto clamp(36px, 5vw, 60px)" }}>
            <span className="section-subtitle">Trusted Supply Partnerships</span>
            <h1 className="section-title">
              Industrial Acrylic Sheet Suppliers for Commercial Clients
            </h1>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              At <strong>Mahadev Plastic</strong>, we are the dedicated B2B manufacturing and supply partner for over 500+ commercial clients, signage fabricators, interior design studios, and industrial OEMs across India. Delivering precision tolerances, virgin PMMA quality, and dependable wholesale factory dispatch.
            </p>
          </div>

          {/* Client Industry Sectors Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "clamp(20px, 2.5vw, 32px)",
            }}
          >
            {CLIENT_SECTORS.map((sector, idx) => {
              const IconComp = sector.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "var(--bg-white)",
                    border: "1px solid var(--border-light)",
                    borderRadius: "var(--radius-md)",
                    padding: "clamp(24px, 3vw, 34px)",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "rgba(13, 27, 95, 0.08)",
                      color: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={26} />
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(18px, 1.8vw, 21px)",
                      fontWeight: 700,
                      color: "var(--primary)",
                      marginBottom: "12px",
                      lineHeight: 1.35,
                    }}
                  >
                    {sector.title}
                  </h2>

                  <p
                    style={{
                      fontSize: "14.5px",
                      lineHeight: 1.7,
                      color: "var(--text-muted)",
                      marginBottom: "20px",
                      flexGrow: 1,
                    }}
                  >
                    {sector.desc}
                  </p>

                  <div
                    style={{
                      paddingTop: "14px",
                      borderTop: "1px solid var(--border-light)",
                      fontSize: "13px",
                      color: "var(--secondary)",
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ color: "var(--text-light)", fontWeight: 500 }}>Key Materials Supplied: </span>
                    {sector.sheetsSupplied}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          <div className="about-section-grid">
            <div className="about-images-wrapper">
              <img
                src="/images/about/facility-3.png"
                alt="Mahadev Plastic bulk acrylic sheet warehouse and wholesale dispatch facility in Talasari Maharashtra - supplying industries across India with 2mm to 25mm thickness inventory"
                className="about-img-main"
                style={{ width: "100%", height: "clamp(280px, 32vw, 420px)", objectFit: "cover", borderRadius: "var(--radius-md)" }}
                loading="lazy"
              />
            </div>

            <div>
              <span className="section-subtitle">Commercial Reliability</span>
              <h2 className="section-title">
                Why India&apos;s Leading Enterprises Rely on Mahadev Plastic
              </h2>
              <p className="section-desc">
                From standardized 8x4 ft shipments to specialized custom gauges, our industrial client service model is built on transparency, prompt logistics, and uncompromising polymer specifications:
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
                <li style={{ display: "flex", gap: "12px", color: "var(--text-muted)", fontSize: "15px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>100% Virgin MMA Raw Materials:</strong> Zero recycled plastic or chalk fillers, ensuring pristine clarity and structural longevity.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", color: "var(--text-muted)", fontSize: "15px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Consistent Thickness Tolerance (±5%):</strong> Machine-calibrated casting cycles ensure reliable laser cutting and CNC machining.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", color: "var(--text-muted)", fontSize: "15px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Rapid Transit Across Maharashtra &amp; Gujarat:</strong> Strategically situated in Achhad, Talasari for 24–48 hour industrial dispatch.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", color: "var(--text-muted)", fontSize: "15px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Dedicated B2B Account Engineers:</strong> Direct factory contact for custom sizing, TDS/MSDS certification, and wholesale volume pricing.</span>
                </li>
              </ul>

              <Link href="/contact-us" className="pxl-btn">
                <span>Request B2B Client Quotation</span>
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
              <span className="section-subtitle light">Partner With Us</span>
              <h2 className="section-title light">
                Open a Commercial Supply Account With Mahadev Plastic
              </h2>
              <p className="section-desc light">
                Whether you require scheduled monthly container dispatches or project-based custom sheet dimensions, our commercial desk is ready to discuss your specifications.
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
