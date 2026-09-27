import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";

export default function Footer() {
  return (
    <>
      {/* Pre-Footer Call to Action Banner matching Section 8fad282 */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-inner">
            <div>
              <span className="section-subtitle light" style={{ marginBottom: "6px" }}>
                Let’s Talk About Your Requirement
              </span>
              <h2 className="cta-banner-title">
                Have questions or need the right acrylic sheet for your project?
              </h2>
              <p className="cta-banner-desc">
                Our team is here to help you choose the best solution for your requirements.
                Feel free to contact us for more information, samples, and direct manufacturer support.
              </p>
            </div>
            <div>
              <Link href="/contact-us" className="pxl-btn-accent" style={{ whiteSpace: "nowrap" }}>
                <span>Contact Us</span>
                <span className="btn-icon">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer matching Section be8cdff */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: About Company */}
            <div>
              <img
                src="/images/mahade-logo.png"
                alt="Mahadev Plastic"
                className="footer-logo"
              />
              <p className="footer-bio">
                <strong>Mahadev Plastic</strong> is a trusted manufacturer of high-quality acrylic
                sheets, delivering durable, precision-crafted solutions for signage, interiors,
                fabrication, and commercial applications. With a strong focus on quality,
                consistency, and customer satisfaction, we provide reliable acrylic products
                businesses can depend on.
              </p>
            </div>

            {/* Col 2: Products Links */}
            <div>
              <h3 className="footer-title">Our Product</h3>
              <ul className="footer-links-list">
                <li className="footer-link">
                  <ChevronRight size={14} style={{ color: "var(--accent)" }} />
                  <Link href="/acrylic-sheets">Acrylic Sheet</Link>
                </li>
                {PRODUCTS.filter(p => p.slug !== "acrylic-sheets").map((prod) => (
                  <li key={prod.id} className="footer-link">
                    <ChevronRight size={14} style={{ color: "var(--accent)" }} />
                    <Link href={`/${prod.slug}`}>{prod.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company Contact Info */}
            <div>
              <h3 className="footer-title">Address Company</h3>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <p style={{ margin: 0, lineHeight: 1.6 }}>
                    {COMPANY_INFO.address.full}
                  </p>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <p style={{ margin: 0 }}>
                    Call Us:{" "}
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ color: "#FFFFFF", fontWeight: 700 }}>
                      {COMPANY_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <p style={{ margin: 0 }}>
                    Mail:{" "}
                    <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: "#FFFFFF" }}>
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Legal Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-inner">
              <div>
                Copyright © 2026 Mahadev Plastic All Rights Reserved | Developed By Integral Web Solution
              </div>
              <div className="footer-legal-links">
                <Link href="/our-clients">Our Clients</Link>
                <span>|</span>
                <Link href="/our-work">Our Work</Link>
                <span>|</span>
                <Link href="/privacy-policy">Privacy policy</Link>
                <span>|</span>
                <Link href="/terms-conditions">Terms and Conditions</Link>
                <span>|</span>
                <Link href="/disclaimer">Disclaimer</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
