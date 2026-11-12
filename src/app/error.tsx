"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <section style={{ padding: "100px 20px", backgroundColor: "#F8FAFC", textAlign: "center", minHeight: "60vh" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            backgroundColor: "#FEE2E2",
            color: "#DC2626",
            marginBottom: "24px",
          }}
        >
          <AlertTriangle size={36} />
        </div>

        <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#1E293B", marginBottom: "12px" }}>
          Something went wrong!
        </h1>
        <p style={{ fontSize: "16px", color: "#64748B", marginBottom: "32px", lineHeight: "1.6" }}>
          We apologize for the inconvenience. An unexpected error occurred while processing your request.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              backgroundColor: "#0D1B5F",
              color: "#FFFFFF",
              borderRadius: "6px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
            }}
          >
            <RotateCcw size={18} />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
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
            <Home size={18} />
            <span>Go to Homepage</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
