import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Home, ArrowRight, Layers, Phone } from "lucide-react";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Mahadev Plastic",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <>
      <BreadcrumbBanner
        title="404 - Page Not Found"
        breadcrumbs={[{ label: "Page Not Found", href: "" }]}
        description="The page you requested could not be found."
      />

      <section style={{ padding: "80px 0", backgroundColor: "#F8FAFC", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "96px",
              fontWeight: "800",
              color: "#0D1B5F",
              lineHeight: "1",
              marginBottom: "16px",
            }}
          >
            404
          </div>
          <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#1E293B", marginBottom: "16px" }}>
            Oops! Page Not Found
          </h2>
          <p style={{ fontSize: "16px", color: "#64748B", marginBottom: "32px", lineHeight: "1.6" }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              justifyContent: "center",
            }}
          >
            <Link
              href="/"
              className="pxl-btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                backgroundColor: "#0D1B5F",
                color: "#FFFFFF",
                borderRadius: "6px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              <Home size={18} />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/acrylic-sheets"
              className="pxl-btn-accent"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                backgroundColor: "#FF6B00",
                color: "#FFFFFF",
                borderRadius: "6px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              <Layers size={18} />
              <span>View Products</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact-us"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                backgroundColor: "#E2E8F0",
                color: "#1E293B",
                borderRadius: "6px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              <Phone size={18} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
