"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-actions">
      {/* WhatsApp Direct Chat Button */}
      <a
        href={COMPANY_INFO.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp-float"
        aria-label="Chat with Mahadev Plastic on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="btn-scroll-top"
          aria-label="Scroll back to top"
          title="Scroll to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
