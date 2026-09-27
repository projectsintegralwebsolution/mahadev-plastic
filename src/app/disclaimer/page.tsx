import React from "react";
import { Metadata } from "next";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Disclaimer | Mahadev Plastic",
  description: "Read the official legal disclaimer and limitation of liability for Mahadev Plastic website content and specifications.",
};

export default function DisclaimerPage() {
  return (
    <>
      <BreadcrumbBanner
        title="Disclaimer"
        items={[{ label: "Disclaimer" }]}
      />

      <section className="section-padding">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="product-content-block">
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "32px", fontWeight: 800, color: "var(--primary)", marginBottom: "20px" }}>
              Disclaimer &amp; Limitation of Liability
            </h1>

            <p>
              The information provided by <strong>Mahadev Plastic</strong> on this website is intended for general informational purposes only. All technical specifications, thicknesses, dimensions, and material test reports are published in good faith based on standard laboratory polymer evaluations.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Mahadev Plastic shall not be held liable for any direct, indirect, consequential, or incidental loss or damage arising from the use of this website or reliance on the product information provided.
            </p>
            <p>
              All product descriptions, chemical resistance tables, thermal deflection ratings, and application suggestions are subject to revision without prior notice. Clients and engineers are strongly advised to perform preliminary testing under their exact fabrication, thermoforming, or load conditions prior to full-scale commercial installation.
            </p>

            <h2>External Website Links</h2>
            <p>
              Our website may contain hyperlinks to third-party websites or services that are not owned or controlled by Mahadev Plastic. Mahadev Plastic has no authority over, and accepts no responsibility for, the content, privacy statements, or practices of any external sites.
            </p>

            <h2>Technical &amp; Typographical Inaccuracies</h2>
            <p>
              While every effort is made to maintain complete accuracy, technical inaccuracies or typographical errors may occasionally occur. Mahadev Plastic reserves the right to make changes, corrections, and improvements to the website at any time without obligation.
            </p>

            <h2>Questions &amp; Verifications</h2>
            <p>
              If you require signed technical data sheets (TDS), certificates of analysis (CoA), or formal warranty documentation, please reach out to our engineering department at{" "}
              <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: "var(--primary)", fontWeight: 600 }}>
                {COMPANY_INFO.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ color: "var(--primary)", fontWeight: 600 }}>
                {COMPANY_INFO.phone}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
