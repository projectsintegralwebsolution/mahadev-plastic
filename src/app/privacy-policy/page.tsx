import React from "react";
import { Metadata } from "next";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Mahadev Plastic",
  description: "Read the website privacy policy for Mahadev Plastic regarding personal information, data handling, and communication.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbBanner
        title="Privacy Policy"
        items={[{ label: "Privacy Policy" }]}
      />

      <section className="section-padding">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="product-content-block">
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "32px", fontWeight: 800, color: "var(--primary)", marginBottom: "20px" }}>
              Privacy Policy for Mahadev Plastic
            </h1>

            <p>
              At <strong>Mahadev Plastic</strong>, accessible from https://mahadevplastic.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of personal information that is received and collected by Mahadev Plastic and how it is used.
            </p>

            <h2>Information Collection and Use</h2>
            <p>
              When you submit a contact inquiry, request a catalog, or contact us via phone or WhatsApp, we may collect personal details such as your full name, email address, phone number, and project specifications.
            </p>
            <p>
              We use this information strictly for business communication, customer support, order fulfillment, and service improvement. Mahadev Plastic does not sell, rent, or share your personal data with third parties for marketing purposes.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar technologies to enhance user experience, remember user preferences, and analyze website traffic performance. You can choose to disable cookies through your individual browser settings if you prefer not to share this data.
            </p>

            <h2>Data Security Measures</h2>
            <p>
              We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, while we strive to use commercially acceptable means to protect your data, no transmission over the internet is completely secure.
            </p>

            <h2>Third-Party External Links</h2>
            <p>
              Our website may include links to third-party websites for references or convenience. Mahadev Plastic has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party sites.
            </p>

            <h2>Contacting Us Regarding Privacy</h2>
            <p>
              If you wish to access, update, or delete your personal information, or if you have any questions concerning our privacy policy, please contact us at:
            </p>
            <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8" }}>
              <li><strong>Telephone:</strong> {COMPANY_INFO.phone}</li>
              <li><strong>Email:</strong> {COMPANY_INFO.email}</li>
              <li><strong>Factory Address:</strong> {COMPANY_INFO.address.full}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
