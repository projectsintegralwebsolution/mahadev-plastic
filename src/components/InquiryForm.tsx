"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { PRODUCTS } from "@/data/products";

interface InquiryFormProps {
  initialProduct?: string;
  theme?: "dark" | "light";
}

export default function InquiryForm({ initialProduct = "", theme = "dark" }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: initialProduct || "Acrylic Sheets",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in all required fields (Name, Email, Phone, and Message).");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg(data.message || "Thank you! Your inquiry has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: initialProduct || "Acrylic Sheets",
          message: "",
        });
      } else {
        setErrorMsg(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (err: any) {
      console.error("Error submitting inquiry:", err);
      setErrorMsg("A network error occurred. Please contact us directly at +91 9987904482.");
    } finally {
      setLoading(false);
    }
  };

  const isLight = theme === "light";

  return (
    <div
      className="inquiry-card"
      style={
        isLight
          ? {
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }
          : undefined
      }
    >
      <div style={{ marginBottom: "24px" }}>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "24px",
            fontWeight: 700,
            color: isLight ? "var(--primary)" : "#FFFFFF",
            marginBottom: "8px",
          }}
        >
          Product Inquiry & Price Quote
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: isLight ? "var(--text-muted)" : "#CBD5E1",
            margin: 0,
          }}
        >
          Get direct manufacturer factory rates, sheet sample requests, and custom size consultations.
        </p>
      </div>

      {successMsg && (
        <div className="alert-box alert-success" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <CheckCircle2 size={20} style={{ flexShrink: 0 }} />
          <span>{successMsg}</span>
        </div>
      )}

      {errorMsg && (
        <div className="alert-box alert-error" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <AlertCircle size={20} style={{ flexShrink: 0 }} />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" style={{ color: isLight ? "#374151" : undefined }}>
              Your Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="form-control"
              style={
                isLight
                  ? { backgroundColor: "#F9FAFB", borderColor: "#D1D5DB", color: "#111827" }
                  : undefined
              }
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" style={{ color: isLight ? "#374151" : undefined }}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. rahul@company.com"
              className="form-control"
              style={
                isLight
                  ? { backgroundColor: "#F9FAFB", borderColor: "#D1D5DB", color: "#111827" }
                  : undefined
              }
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" style={{ color: isLight ? "#374151" : undefined }}>
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 9876543210"
              className="form-control"
              style={
                isLight
                  ? { backgroundColor: "#F9FAFB", borderColor: "#D1D5DB", color: "#111827" }
                  : undefined
              }
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" style={{ color: isLight ? "#374151" : undefined }}>
              Select Product
            </label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="form-control"
              style={
                isLight
                  ? { backgroundColor: "#F9FAFB", borderColor: "#D1D5DB", color: "#111827" }
                  : undefined
              }
            >
              <option value="All Acrylic Sheets">All Acrylic Sheets</option>
              {PRODUCTS.map((prod) => (
                <option key={prod.id} value={prod.title}>
                  {prod.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" style={{ color: isLight ? "#374151" : undefined }}>
            Requirement Details / Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Specify required thickness, dimensions, quantity, or specific project requirements..."
            className="form-control"
            style={
              isLight
                ? { backgroundColor: "#F9FAFB", borderColor: "#D1D5DB", color: "#111827" }
                : undefined
            }
            required
          />
        </div>

        <button
          type="submit"
          className="pxl-btn-accent form-submit-btn"
          style={{ width: "100%", justifyContent: "center", height: "52px" }}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Submitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Send Product Inquiry</span>
              <span className="btn-icon">
                <ArrowRight size={15} />
              </span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
