import React from "react";
import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { COMPANY_INFO } from "@/data/company";
import { PHASE_ONE_SEO } from "@/data/seoData";

export const metadata: Metadata = {
  title: {
    absolute: PHASE_ONE_SEO.contact.title,
  },
  description: PHASE_ONE_SEO.contact.description,
  keywords: [
    PHASE_ONE_SEO.contact.focusKeyword,
    ...PHASE_ONE_SEO.contact.supportiveKeywords.highVolume,
    ...PHASE_ONE_SEO.contact.supportiveKeywords.mediumVolume,
    ...PHASE_ONE_SEO.contact.supportiveKeywords.longTail,
  ],
  alternates: {
    canonical: PHASE_ONE_SEO.contact.canonicalUrl,
  },
  openGraph: {
    title: PHASE_ONE_SEO.contact.openGraph.title,
    description: PHASE_ONE_SEO.contact.openGraph.description,
    url: PHASE_ONE_SEO.contact.openGraph.url,
    siteName: "Mahadev Plastic",
    images: [
      {
        url: PHASE_ONE_SEO.contact.openGraph.image,
        width: 1200,
        height: 630,
        alt: "Mahadev Plastic - Contact Acrylic Sheet Manufacturer in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PHASE_ONE_SEO.contact.openGraph.title,
    description: PHASE_ONE_SEO.contact.openGraph.description,
    images: [PHASE_ONE_SEO.contact.openGraph.image],
  },
};

export default function ContactUsPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ContactPage", "LocalBusiness"],
        "@id": "https://mahadevplastic.com/contact-us#webpage",
        url: "https://mahadevplastic.com/contact-us",
        name: PHASE_ONE_SEO.contact.title,
        description: PHASE_ONE_SEO.contact.description,
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
            name: "Contact Us",
            item: "https://mahadevplastic.com/contact-us",
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={contactSchema} />

      <BreadcrumbBanner
        title="Contact Us"
        items={[{ label: "Contact Us" }]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Direct Contact Details & Info */}
            <div className="contact-info-panel">
              <div>
                <span className="section-subtitle">Reach Our Team</span>
                <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "var(--primary)", marginBottom: "16px" }}>
                  Get In Touch With Us
                </h1>
                <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.7 }}>
                  Have questions about our acrylic sheet specifications, custom thickness tolerances,
                  or bulk wholesale delivery across India? Contact our manufacturing plant and sales desk directly.
                </p>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="contact-card-title">Plant &amp; Registered Office</h3>
                  <p className="contact-card-text">
                    {COMPANY_INFO.address.full}
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="contact-card-title">Direct Telephone &amp; WhatsApp</h3>
                  <p className="contact-card-text">
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ color: "var(--primary)", fontWeight: 700, fontSize: "17px" }}>
                      {COMPANY_INFO.phone}
                    </a>
                  </p>
                  <p style={{ fontSize: "13px", color: "var(--text-light)", marginTop: "2px" }}>
                    Available Mon–Sun 09:00 to 17:00 for direct calls and quotes
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="contact-card-title">Email Inquiries</h3>
                  <p className="contact-card-text">
                    <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: "var(--primary)", fontWeight: 600 }}>
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                  <p style={{ fontSize: "13px", color: "var(--text-light)", marginTop: "2px" }}>
                    We respond to email inquiries within 2-4 business hours
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="contact-card-title">Working Hours</h3>
                  <p className="contact-card-text">
                    {COMPANY_INFO.workingDays}: {COMPANY_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div>
              <InquiryForm theme="light" />
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="map-embed-wrapper">
            <iframe
              title="MAHADEV PLASTIC Factory Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.2455416626244!2d72.9168632!3d20.1238013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be731a335361f21%3A0xfc815a96bc8679cc!2sMAHADEV%20PLASTIC!5e0!3m2!1sen!2sin!4v1790058282387!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  );
}
