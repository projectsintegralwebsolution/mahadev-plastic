"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Mail, Clock, ChevronDown, Menu, X, ArrowRight, Search } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu & search on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase();
    const matchedProduct = PRODUCTS.find(
      (p) => p.title.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q)
    );
    if (matchedProduct) {
      router.push(`/${matchedProduct.slug}`);
    } else {
      router.push(`/acrylic-sheets`);
    }
    setSearchOpen(false);
  };

  return (
    <>
      {/* Top Header Bar */}
      <div className="top-header">
        <div className="container">
          <div className="top-header-inner">
            <div className="top-header-contacts">
              <div className="top-header-item">
                <Phone size={15} />
                <span>Call Us 24/7:</span>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`}>{COMPANY_INFO.phone}</a>
              </div>
              <div className="top-header-item">
                <Mail size={15} />
                <span>send mail us:</span>
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </div>
            </div>

            <div className="top-header-right">
              <div className="top-header-item">
                <Clock size={15} />
                <span>Hours: {COMPANY_INFO.workingHours} ({COMPANY_INFO.workingDays})</span>
              </div>
              <span className="top-header-badge">Talasari, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="main-header-inner">
            {/* Logo */}
            <Link href="/" className="logo-link">
              <img
                src="/images/mahade-logo.png"
                alt="Mahadev Plastic Logo"
                className="header-logo-img"
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="nav-menu">
              <div className="nav-item">
                <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
                  Home
                </Link>
              </div>

              <div className="nav-item">
                <Link
                  href="/about-us"
                  className={`nav-link ${pathname === "/about-us" ? "active" : ""}`}
                >
                  About Us
                </Link>
              </div>

              {/* Products Dropdown */}
              <div className="nav-item">
                <Link
                  href="/acrylic-sheets"
                  className={`nav-link ${pathname.includes("acrylic") || pathname.includes("sheet") ? "active" : ""}`}
                >
                  Products <ChevronDown size={14} />
                </Link>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link href="/acrylic-sheets">
                      <span>All Acrylic Sheets</span>
                      <ArrowRight size={13} />
                    </Link>
                  </li>
                  {PRODUCTS.filter(p => p.slug !== "acrylic-sheets").map((product) => (
                    <li key={product.id} className="dropdown-item">
                      <Link href={`/${product.slug}`}>
                        <span>{product.title}</span>
                        <ArrowRight size={13} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nav-item">
                <Link
                  href="/blogs"
                  className={`nav-link ${pathname.startsWith("/blogs") ? "active" : ""}`}
                >
                  Blogs
                </Link>
              </div>

              <div className="nav-item">
                <Link
                  href="/contact-us"
                  className={`nav-link ${pathname === "/contact-us" ? "active" : ""}`}
                >
                  Contact Us
                </Link>
              </div>
            </nav>

            {/* Header Right Action & Mobile Toggle */}
            <div className="header-actions">
              {/* Search Popup Button */}
              <button
                type="button"
                className="header-search-btn"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search dialog"
                title="Search Products"
              >
                <Search size={18} />
              </button>

              {/* Inquire CTA Button with rotating arrow */}
              <Link href="/contact-us" className="pxl-btn">
                <span>Inquire Now</span>
                <span className="btn-icon">
                  <ArrowRight size={15} />
                </span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Toggle navigation menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal Popup */}
      <div className={`search-modal-backdrop ${searchOpen ? "open" : ""}`}>
        <div className="search-modal-box">
          <button
            type="button"
            className="search-modal-close"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
          >
            <X size={32} />
          </button>
          <form onSubmit={handleSearchSubmit}>
            <div className="search-input-wrap">
              <input
                type="text"
                className="search-input-field"
                placeholder="Search acrylic sheets, cast, frosted, fluorescent..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus={searchOpen}
              />
              <button type="submit" className="search-submit-icon" aria-label="Submit search">
                <Search size={24} />
              </button>
            </div>
          </form>
          <div style={{ marginTop: "16px", color: "#CBD5E1", fontSize: "14px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <span>Quick search:</span>
            {PRODUCTS.slice(0, 4).map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  router.push(`/${p.slug}`);
                  setSearchOpen(false);
                }}
                style={{
                  color: "var(--accent)",
                  background: "rgba(255,255,255,0.08)",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  fontSize: "13px",
                }}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Slide Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <img
            src="/images/mahade-logo.png"
            alt="Mahadev Plastic"
            style={{ maxHeight: "38px", width: "auto" }}
          />
          <button
            type="button"
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="mobile-nav-list">
          <Link
            href="/"
            className={`mobile-nav-link ${pathname === "/" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`mobile-nav-link ${pathname === "/about-us" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>

          <Link
            href="/acrylic-sheets"
            className={`mobile-nav-link ${pathname === "/acrylic-sheets" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>

          <div className="mobile-sub-list">
            {PRODUCTS.map((prod) => (
              <Link
                key={prod.id}
                href={`/${prod.slug}`}
                className="mobile-sub-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                • {prod.title}
              </Link>
            ))}
          </div>

          <Link
            href="/blogs"
            className={`mobile-nav-link ${pathname.startsWith("/blogs") ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/contact-us"
            className={`mobile-nav-link ${pathname === "/contact-us" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>

        <div style={{ marginTop: "32px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ fontSize: "13px", color: "#94A3B8", marginBottom: "8px" }}>Direct Helpline:</div>
          <div style={{ fontWeight: 700, color: "#FFFFFF", fontSize: "17px", marginBottom: "6px" }}>
            <a href={`tel:${COMPANY_INFO.phoneRaw}`}>{COMPANY_INFO.phone}</a>
          </div>
          <div style={{ fontSize: "14px", color: "#CBD5E1" }}>
            <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
