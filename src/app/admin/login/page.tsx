"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, ArrowRight, AlertCircle, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        if (data.token) {
          localStorage.setItem("admin_token", data.token);
        }
        router.push("/admin/blogs");
        router.refresh();
      } else {
        setError(data.error || "Invalid username or password");
      }
    } catch (err: any) {
      console.error("Login failed:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0D1B5F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        backgroundImage: "radial-gradient(circle at 50% 20%, rgba(244, 180, 0, 0.08) 0%, transparent 60%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
        }}
      >
        {/* Top Header Card */}
        <div
          style={{
            backgroundColor: "#08113B",
            padding: "36px 32px 28px",
            textAlign: "center",
            borderBottom: "3px solid #F4B400",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "14px",
              backgroundColor: "#F4B400",
              color: "#0D1B5F",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 900,
              marginBottom: "14px",
              boxShadow: "0 4px 12px rgba(244, 180, 0, 0.3)",
            }}
          >
            M
          </div>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: 800,
              margin: "0 0 6px",
              letterSpacing: "0.5px",
            }}
          >
            MAHADEV PLASTIC
          </h1>
          <p style={{ color: "#F4B400", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", margin: 0 }}>
            Blog &amp; SEO Management Portal
          </p>
        </div>

        {/* Login Form Body */}
        <div style={{ padding: "32px" }}>
          {error && (
            <div
              style={{
                backgroundColor: "#FEF2F2",
                border: "1px solid #FECACA",
                color: "#991B1B",
                padding: "12px 14px",
                borderRadius: "8px",
                marginBottom: "20px",
                fontSize: "13px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <AlertCircle size={16} style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#1E293B",
                  marginBottom: "6px",
                }}
              >
                Username
              </label>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ position: "absolute", left: "14px", color: "#94A3B8" }}>
                  <User size={18} />
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter admin username"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 14px 12px 42px",
                    borderRadius: "8px",
                    border: "1px solid #CBD5E1",
                    fontSize: "14px",
                    outline: "none",
                    color: "#0F172A",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#1E293B",
                  marginBottom: "6px",
                }}
              >
                Password
              </label>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ position: "absolute", left: "14px", color: "#94A3B8" }}>
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 14px 12px 42px",
                    borderRadius: "8px",
                    border: "1px solid #CBD5E1",
                    fontSize: "14px",
                    outline: "none",
                    color: "#0F172A",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                marginTop: "10px",
                padding: "13px",
                borderRadius: "8px",
                backgroundColor: "#0D1B5F",
                color: "#ffffff",
                border: "none",
                fontSize: "15px",
                fontWeight: 700,
                cursor: isLoading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxShadow: "0 4px 12px rgba(13, 27, 95, 0.25)",
                transition: "all 0.2s ease",
              }}
            >
              <span>{isLoading ? "Signing in..." : "Sign In to Portal"}</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <div
            style={{
              marginTop: "24px",
              paddingTop: "20px",
              borderTop: "1px solid #F1F5F9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              color: "#64748B",
              fontSize: "12px",
            }}
          >
            <ShieldCheck size={14} style={{ color: "#16A34A" }} />
            <span>Secure Authorized Administrator Access Only</span>
          </div>
        </div>
      </div>
    </div>
  );
}
