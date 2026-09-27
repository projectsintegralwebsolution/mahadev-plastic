"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Download, PhoneCall, Mail } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";

interface ProductSidebarProps {
  currentSlug: string;
}

export default function ProductSidebar({ currentSlug }: ProductSidebarProps) {
  return (
    <aside className="product-sidebar">
      {/* Category Navigation Widget */}
      <div className="sidebar-widget">
        <h3 className="sidebar-title">Our Products</h3>
        <ul className="sidebar-nav-list">
          <li className={`sidebar-nav-item ${currentSlug === "acrylic-sheets" ? "active" : ""}`}>
            <Link href="/acrylic-sheets">
              <span>Acrylic Sheets (Overview)</span>
              <ChevronRight size={16} />
            </Link>
          </li>
          {PRODUCTS.filter(p => p.slug !== "acrylic-sheets").map((prod) => (
            <li
              key={prod.id}
              className={`sidebar-nav-item ${currentSlug === prod.slug ? "active" : ""}`}
            >
              <Link href={`/${prod.slug}`}>
                <span>{prod.title}</span>
                <ChevronRight size={16} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Download Brochure Widget */}
      <div className="sidebar-widget" style={{ textAlign: "center" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "rgba(13, 27, 95, 0.08)",
            color: "var(--primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          <Download size={24} />
        </div>
        <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>
          Download Brochure
        </h4>
        <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "18px" }}>
          Download our comprehensive acrylic sheet catalog for technical specifications and grades.
        </p>
        <a
          href="/contact-us"
          className="btn-outline"
          style={{ width: "100%", justifyContent: "center" }}
        >
          Request Catalog PDF
        </a>
      </div>

      {/* Quick Assistance CTA Box */}
      <div className="sidebar-cta-card">
        <div className="sidebar-cta-icon">
          <PhoneCall size={24} />
        </div>
        <h4 className="sidebar-cta-title">Need Immediate Help?</h4>
        <p className="sidebar-cta-text">
          Speak directly with our technical sales engineers for custom dimensions, tolerances, and bulk pricing.
        </p>
        <div style={{ marginBottom: "12px" }}>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            style={{
              color: "var(--accent)",
              fontWeight: 700,
              fontSize: "18px",
              display: "block",
            }}
          >
            {COMPANY_INFO.phone}
          </a>
        </div>
        <div>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            style={{
              color: "#CBD5E1",
              fontSize: "13px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Mail size={14} />
            <span>{COMPANY_INFO.email}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
