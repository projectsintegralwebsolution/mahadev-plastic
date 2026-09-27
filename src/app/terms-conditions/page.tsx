import React from "react";
import { Metadata } from "next";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mahadev Plastic",
  description: "Read the website terms and conditions governing the use of the Mahadev Plastic website and product information.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <BreadcrumbBanner
        title="Terms & Conditions"
        items={[{ label: "Terms & Conditions" }]}
      />

      <section className="section-padding">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="product-content-block">
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "32px", fontWeight: 800, color: "var(--primary)", marginBottom: "20px" }}>
              Website Terms &amp; Conditions
            </h1>

            <p>
              Welcome to <strong>Mahadev Plastic</strong>. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.
            </p>

            <h2>Intellectual Property Rights</h2>
            <p>
              All content published on this website, including text, logos, photographs, illustrations, technical data, and design layouts, is the proprietary property of Mahadev Plastic and is protected under applicable intellectual property laws. You may access and browse this website for informational purposes only. You must not copy, reproduce, distribute, or misuse any content without explicit prior written authorization from Mahadev Plastic.
            </p>

            <h2>Website Content &amp; Accuracy</h2>
            <p>
              While we strive to provide accurate and up-to-date information regarding acrylic sheet specifications, dimensions, tolerances, and applications, we make no representations or warranties of any kind regarding completeness or infallibility. Your reliance on any information on this website is at your own discretion and risk.
            </p>

            <h2>Product Orders &amp; Commercial Terms</h2>
            <p>
              Product inquiries, sample requests, and price quotations initiated through this website are subject to formal confirmation by our sales team. Final manufacturing tolerances, dispatch lead times, and payment terms will be governed by commercial purchase orders.
            </p>

            <h2>Modifications of Terms</h2>
            <p>
              Mahadev Plastic reserves the right to modify or update these terms and conditions at any time without prior announcement. Continued use of the website following any modifications constitutes your acceptance of the revised terms.
            </p>

            <h2>Governing Law &amp; Jurisdiction</h2>
            <p>
              These terms shall be governed by and interpreted in accordance with the laws of the Republic of India. Any legal dispute arising under or in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Palghar / Mumbai, Maharashtra.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
