"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, PlusCircle, FileText, Globe, ExternalLink } from "lucide-react";

interface AdminHeaderProps {
  activeTab?: "blogs" | "new";
}

export default function AdminHeader({ activeTab = "blogs" }: AdminHeaderProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Logout failed:", err);
      router.push("/admin/login");
    }
  };

  return (
    <header
      style={{
        backgroundColor: "#0D1B5F",
        color: "#ffffff",
        borderBottom: "3px solid #F4B400",
        padding: "14px 24px",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Brand / Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link href="/admin/blogs" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                backgroundColor: "#F4B400",
                color: "#0D1B5F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "20px",
              }}
            >
              M
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "17px", color: "#ffffff", letterSpacing: "0.5px" }}>
                MAHADEV PLASTIC
              </div>
              <div style={{ fontSize: "11px", color: "#F4B400", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                SEO &amp; Blog CMS Portal
              </div>
            </div>
          </Link>

          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "20px" }}>|</span>

          {/* Navigation Links */}
          <nav style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link
              href="/admin/blogs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
                color: activeTab === "blogs" ? "#0D1B5F" : "rgba(255,255,255,0.85)",
                backgroundColor: activeTab === "blogs" ? "#F4B400" : "transparent",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <FileText size={15} />
              <span>All Articles</span>
            </Link>

            <Link
              href="/admin/blogs/new"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
                color: activeTab === "new" ? "#0D1B5F" : "rgba(255,255,255,0.85)",
                backgroundColor: activeTab === "new" ? "#F4B400" : "rgba(255,255,255,0.08)",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <PlusCircle size={15} />
              <span>+ New Article</span>
            </Link>
          </nav>
        </div>

        {/* Quick External Actions & Logout */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            href="/blogs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 12px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.2)",
              textDecoration: "none",
            }}
          >
            <Globe size={14} />
            <span>View Live Site</span>
            <ExternalLink size={12} />
          </Link>

          <button
            onClick={handleLogout}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 14px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#ff6b6b",
              backgroundColor: "rgba(255, 107, 107, 0.12)",
              border: "1px solid rgba(255, 107, 107, 0.3)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <LogOut size={14} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
