import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Zap, Truck, Phone, ChevronRight } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import { PHASE_ONE_SEO } from "@/data/seoData";

export const metadata: Metadata = {
  title: {
    absolute: PHASE_ONE_SEO.home.title,
  },
  description: PHASE_ONE_SEO.home.description,
  keywords: [
    PHASE_ONE_SEO.home.focusKeyword,
    ...PHASE_ONE_SEO.home.supportiveKeywords.highVolume,
    ...PHASE_ONE_SEO.home.supportiveKeywords.mediumVolume,
    ...PHASE_ONE_SEO.home.supportiveKeywords.longTail,
  ],
  alternates: {
    canonical: PHASE_ONE_SEO.home.canonicalUrl,
  },
  openGraph: {
    title: PHASE_ONE_SEO.home.openGraph.title,
    description: PHASE_ONE_SEO.home.openGraph.description,
    url: PHASE_ONE_SEO.home.openGraph.url,
    siteName: "Mahadev Plastic",
    images: [
      {
        url: PHASE_ONE_SEO.home.openGraph.image,
        width: 1920,
        height: 889,
        alt: "Mahadev Plastic - Acrylic Sheet Manufacturer in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PHASE_ONE_SEO.home.openGraph.title,
    description: PHASE_ONE_SEO.home.openGraph.description,
    images: [PHASE_ONE_SEO.home.openGraph.image],
  },
};

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "Manufacturer"],
        "@id": "https://mahadevplastic.com/#organization",
        name: "Mahadev Plastic",
        url: "https://mahadevplastic.com",
        logo: {
          "@type": "ImageObject",
          url: "https://mahadevplastic.com/images/mahade-logo.png",
          caption: "Mahadev Plastic",
        },
        image: "https://mahadevplastic.com/images/3.jpg",
        description:
          "Premier B2B acrylic sheet manufacturer in India producing optical-grade transparent, cell cast, frosted, fluorescent, and decorative MOP acrylic sheets for industrial and commercial applications.",
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${COMPANY_INFO.address.line1}, ${COMPANY_INFO.address.line2}`,
          addressLocality: COMPANY_INFO.address.city,
          addressRegion: COMPANY_INFO.address.state,
          postalCode: COMPANY_INFO.address.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 20.1238013,
          longitude: 72.9168632,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "17:00",
          },
        ],
        knowsAbout: [
          "Acrylic Sheet Manufacturing",
          "Polymethyl Methacrylate (PMMA)",
          "Cell Cast Acrylic Sheets",
          "Virgin Monomer MMA Polymerization",
          "Optical Grade Acrylic Glazing",
          "Laser Cut Grade Acrylic",
        ],
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://mahadevplastic.com/#website",
        url: "https://mahadevplastic.com",
        name: "Mahadev Plastic",
        publisher: {
          "@id": "https://mahadevplastic.com/#organization",
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <>
      <JsonLd data={homeSchema} />

      {/* 1. Hero Slider Banner */}
      <HeroSlider />

      {/* 2. About Us Preview Section */}
      <section className="section-padding" id="about">
        <div className="container">
          <div className="about-section-grid">
            {/* Image Collage with Experience Badge */}
            <div className="about-images-wrapper">
              <img
                src="/images/home1.jpg"
                alt="Mahadev Plastic Acrylic Sheet Manufacturing Facility in Talasari"
                className="about-img-main"
              />
              <img
                src="/images/home2.jpg"
                alt="Cell Cast Acrylic Sheet Optical Clarity Quality Inspection"
                className="about-img-secondary"
              />
              <div className="about-badge">
                <div className="about-badge-number">25+</div>
                <div className="about-badge-text">Years of Polymer Excellence</div>
              </div>
            </div>

            {/* Content Area */}
            <div>
              <span className="section-subtitle">trusted acrylic sheet manufacturer since day one</span>
              <h2 className="section-title">
                At Mahadev Plastic, we are a leading acrylic sheet manufacturer in India...
              </h2>
              <p className="section-desc" style={{ textAlign: "justify" }}>
                combining state-of-the-art cell casting technology, skilled chemical workmanship, and rigorous optical
                testing to engineer acrylic sheets that deliver peerless transparency, mechanical strength, and weather
                resilience. Every single sheet is manufactured exclusively from 100% virgin grade Methyl Methacrylate (MMA)
                monomer, guaranteeing superior UV stability, crack resistance, and dependable performance for demanding
                architectural, signage, and industrial fabrication projects across India.
              </p>

              <div className="about-features-list">
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>100% Virgin MMA Monomer</span>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>Computerized Cell Casting</span>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>Superior 92% Optical Clarity</span>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>Custom Sizes &amp; Thicknesses</span>
                </div>
              </div>

              <div style={{ marginTop: "32px" }}>
                <Link href="/about-us" className="pxl-btn">
                  <span>Read More</span>
                  <span className="btn-icon">
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Range Section (with Signature Dark #27201C Banner) */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-light)" }} id="services">
        <div className="container">
          {/* Dark Product Range Banner matching live site */}
          <div className="dark-products-banner">
            <div className="dark-products-banner-grid">
              {/* Col 1: Heading & Info */}
              <div>
                <span className="section-subtitle light">our products</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "38px", fontWeight: 700, color: "#FFFFFF", marginBottom: "14px", lineHeight: 1.2 }}>
                  Our Acrylic Sheet Product Range
                </h2>
                <p style={{ color: "#CDCDCD", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                  We manufacture a comprehensive selection of acrylic sheets to suit diverse applications:
                </p>
              </div>

              {/* Col 2: Products Links Left */}
              <ul className="pxl-link-list">
                <li className="pxl-link-item">
                  <Link href="/acrylic-sheets">
                    <ArrowRight size={16} />
                    <span>Acrylic Sheet</span>
                  </Link>
                </li>
                <li className="pxl-link-item">
                  <Link href="/acrylic-transparent-sheet">
                    <ArrowRight size={16} />
                    <span>Acrylic Transparent Sheet</span>
                  </Link>
                </li>
                <li className="pxl-link-item">
                  <Link href="/fluorescent-acrylic-sheet">
                    <ArrowRight size={16} />
                    <span>Fluorescent Acrylic Sheet</span>
                  </Link>
                </li>
              </ul>

              {/* Col 3: Products Links Right */}
              <ul className="pxl-link-list">
                <li className="pxl-link-item">
                  <Link href="/mop-acrylic-sheet">
                    <ArrowRight size={16} />
                    <span>MOP Acrylic Sheet</span>
                  </Link>
                </li>
                <li className="pxl-link-item">
                  <Link href="/cast-acrylic-sheet">
                    <ArrowRight size={16} />
                    <span>Cast Acrylic Sheet</span>
                  </Link>
                </li>
                <li className="pxl-link-item">
                  <Link href="/frosted-acrylic-sheet">
                    <ArrowRight size={16} />
                    <span>Frosted Acrylic Sheet</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 6 Individual Product Cards */}
          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card-img-wrap">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-card-img"
                  />
                  <span className="product-card-badge">Manufactured in India</span>
                </div>

                <div className="product-card-body">
                  <h3 className="product-card-title">
                    <Link href={`/${product.slug}`}>{product.title}</Link>
                  </h3>
                  <p className="product-card-desc">{product.shortDescription}</p>

                  <div className="product-card-footer">
                    <Link href={`/${product.slug}`} className="product-card-link">
                      <span>View Specifications</span>
                      <ArrowRight size={14} />
                    </Link>
                    <span style={{ fontSize: "12px", color: "var(--text-light)", fontWeight: 600 }}>
                      Custom Cuts Avail.
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Manufacturing Standards & Pillars (4 Cards with #3C4B6D) */}
      <section className="standards-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: "700px", margin: "0 auto 50px" }}>
            <span className="section-subtitle light">Engineering Standards</span>
            <h2 className="section-title light">Health, Safety &amp; Professional Ethics</h2>
            <p className="section-desc light" style={{ margin: "0 auto" }}>
              Our state-of-the-art facility in Talasari operates under strict quality standards
              to guarantee superior customer satisfaction with every batch.
            </p>
          </div>

          <div className="standards-grid">
            <div className="standard-card">
              <div className="standard-icon-wrap">
                <ShieldCheck size={26} />
              </div>
              <h3 className="standard-card-title">Health &amp; Safety</h3>
              <p className="standard-card-desc">
                We prioritize workplace safety and responsible manufacturing practices to protect our team,
                clients, and materials with zero-compromise environmental protocols.
              </p>
            </div>

            <div className="standard-card">
              <div className="standard-icon-wrap">
                <Award size={26} />
              </div>
              <h3 className="standard-card-title">Professional Ethics</h3>
              <p className="standard-card-desc">
                We conduct business with honesty, transparency, and integrity, building lasting partnerships
                with clients through dependable terms and certified consistency.
              </p>
            </div>

            <div className="standard-card">
              <div className="standard-icon-wrap">
                <Zap size={26} />
              </div>
              <h3 className="standard-card-title">Experience &amp; Quality</h3>
              <p className="standard-card-desc">
                With decades of polymer casting experience, our engineers verify thickness tolerances,
                tensile strength, and optical purity on every single production run.
              </p>
            </div>

            <div className="standard-card">
              <div className="standard-icon-wrap">
                <Truck size={26} />
              </div>
              <h3 className="standard-card-title">Environmental Protection</h3>
              <p className="standard-card-desc">
                We employ closed-loop monomer recovery and energy-efficient water baths to minimize carbon
                footprint and preserve ecological integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="section-padding why-choose-section">
        <div className="container">
          <div className="why-grid">
            <div>
              <span className="section-subtitle">why choose us</span>
              <h2 className="section-title">
                Why Choose Mahadev Plastic as Your Acrylic Sheet Manufacturer
              </h2>
              <p className="section-desc" style={{ textAlign: "justify" }}>
                Businesses choose Mahadev Plastic for consistent product quality, precision manufacturing,
                and dependable service. Our acrylic sheets are produced with strict quality control to ensure
                durability and excellent finish. We focus on customer satisfaction through timely delivery,
                technical support, and competitive pricing.
              </p>

              <div className="why-points-list">
                <div className="why-point-item">
                  <div className="why-point-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="why-point-title">Consistent High-Grade Quality</h3>
                    <p className="why-point-desc">
                      Manufactured from 100% pure MMA monomer without recycled fillers for maximum light transmission and tensile strength.
                    </p>
                  </div>
                </div>

                <div className="why-point-item">
                  <div className="why-point-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="why-point-title">Extensive Thickness &amp; Custom Sizes</h3>
                    <p className="why-point-desc">
                      Ranging from 1.5mm up to 25mm+ in standard 8x4 ft formats as well as custom cut-to-size specifications.
                    </p>
                  </div>
                </div>

                <div className="why-point-item">
                  <div className="why-point-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="why-point-title">Direct Manufacturer Pricing</h3>
                    <p className="why-point-desc">
                      Source directly from our Maharashtra plant to save on middleman distributor margins with wholesale bulk discounts.
                    </p>
                  </div>
                </div>

                <div className="why-point-item">
                  <div className="why-point-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="why-point-title">Dedicated Technical Support</h3>
                    <p className="why-point-desc">
                      Our material specialists guide you on fabrication, laser cutting parameters, and adhesive selection for flawless results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagery Collage with Background Overlay */}
            <div className="why-images-collage">
              <img
                src="/images/why1.jpg"
                alt="Acrylic Sheet Precision Crafting"
                className="why-collage-img"
              />
              <img
                src="/images/why2.jpg"
                alt="Acrylic Sheet Storage & Dispatch"
                className="why-collage-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Product Inquiry / Work Together Section */}
      <section className="section-padding inquiry-section">
        <div className="container">
          <div className="inquiry-grid">
            <div>
              <span className="section-subtitle light">let's work together</span>
              <h2 className="section-title light">
                Looking for Reliable Acrylic Solutions?
              </h2>
              <p className="section-desc light" style={{ textAlign: "justify" }}>
                Partner with <strong>Mahadev Plastic</strong> for premium acrylic sheets tailored to your exact
                dimensions and requirements. Contact us today for product inquiries, technical datasheets,
                and wholesale factory quotations.
              </p>

              <div style={{ marginTop: "34px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent)",
                      color: "var(--secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", color: "#D1D5DB" }}>Call For Instant Inquiry</div>
                    <div style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF" }}>
                      <a href={`tel:${COMPANY_INFO.phoneRaw}`}>{COMPANY_INFO.phone}</a>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "22px" }}>
                  <div style={{ fontSize: "14px", color: "#D1D5DB", marginBottom: "6px" }}>
                    <strong>Manufacturing Plant Location:</strong>
                  </div>
                  <div style={{ fontSize: "14.5px", color: "#CBD5E1", lineHeight: 1.6 }}>
                    {COMPANY_INFO.address.full}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Inquiry Form */}
            <div>
              <InquiryForm theme="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
