"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";
import { ProductFaq } from "@/data/seoData";

interface ProductFaqAccordionProps {
  faqs: ProductFaq[];
  productTitle: string;
  categorySlug?: string;
}

export default function ProductFaqAccordion({
  faqs,
  productTitle,
  categorySlug,
}: ProductFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="product-content-block" style={{ marginTop: "36px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
        <HelpCircle size={22} style={{ color: "var(--accent)" }} />
        <span className="section-subtitle" style={{ margin: 0 }}>
          Buyer Knowledge &amp; Guidance
        </span>
      </div>
      <h2 style={{ marginBottom: "14px" }}>
        Frequently Asked Questions: {productTitle}
      </h2>
      <p style={{ color: "var(--text-muted)", fontSize: "15px", marginBottom: "22px", lineHeight: 1.6 }}>
        Real answers to technical, manufacturing, and wholesale procurement queries from our chemical engineering team at Mahadev Plastic.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              style={{
                border: "1px solid var(--border-light)",
                borderRadius: "var(--radius-md)",
                backgroundColor: "#FFFFFF",
                overflow: "hidden",
                transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                boxShadow: isOpen ? "var(--shadow-sm)" : "none",
                borderColor: isOpen ? "var(--primary)" : "var(--border-light)",
              }}
            >
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                  backgroundColor: isOpen ? "rgba(13, 27, 95, 0.04)" : "transparent",
                  cursor: "pointer",
                  border: "none",
                  transition: "background-color 0.2s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "15.5px",
                    fontWeight: 700,
                    color: isOpen ? "var(--primary)" : "var(--secondary)",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    flexShrink: 0,
                    color: isOpen ? "var(--accent)" : "var(--text-muted)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease, color 0.2s ease",
                  }}
                />
              </button>

              <div
                style={{
                  display: isOpen ? "block" : "none",
                  padding: "0 20px 18px 20px",
                  color: "var(--text-muted)",
                  fontSize: "14.5px",
                  lineHeight: 1.7,
                  borderTop: "1px solid rgba(13, 27, 95, 0.06)",
                  marginTop: isOpen ? "8px" : "0",
                  paddingTop: "12px",
                }}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>

      {/* Contextual Internal Linking Prompt */}
      <div
        style={{
          padding: "16px 20px",
          backgroundColor: "var(--bg-light)",
          borderRadius: "var(--radius-md)",
          border: "1px dashed var(--border-light)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "14px",
          fontSize: "13.5px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--secondary)" }}>
          <PhoneCall size={16} style={{ color: "var(--primary)", flexShrink: 0 }} />
          <span>
            Need custom cut-to-size dimensions or bulk project pricing?
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/our-work"
            style={{
              color: "var(--primary)",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span>View Fabrication Projects</span>
            <ArrowRight size={13} />
          </Link>
          <Link
            href="/contact-us"
            style={{
              color: "var(--accent-hover)",
              fontWeight: 700,
              textDecoration: "underline",
            }}
          >
            Direct Factory Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
