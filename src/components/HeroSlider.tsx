"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  tagline: string;
  title: string;
  desc: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText: string;
  secondaryBtnHref: string;
  bgImage: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    tagline: "Precision Acrylic. Trusted Quality.",
    title: "Precision Acrylic Sheets Manufactured with Advanced Processes",
    desc: "Engineered acrylic sheets manufactured with advanced processes to deliver clarity, strength, and reliability for industrial and commercial applications.",
    primaryBtnText: "Get in Touch",
    primaryBtnHref: "/contact-us",
    secondaryBtnText: "Explore Products",
    secondaryBtnHref: "/acrylic-sheets",
    bgImage: "/images/3.jpg",
  },
  {
    id: 2,
    tagline: "Designed for Excellence. Delivered with Care.",
    title: "Durable & Versatile Acrylic Solutions for Various Industries",
    desc: "From transparent to specialty acrylic sheets, we manufacture durable and versatile acrylic solutions for various industries.",
    primaryBtnText: "Get in Touch",
    primaryBtnHref: "/contact-us",
    secondaryBtnText: "Our Products",
    secondaryBtnHref: "/acrylic-sheets",
    bgImage: "/images/2.jpg",
  },
  {
    id: 3,
    tagline: "Reliable Materials. Professional Service.",
    title: "India's Trusted Acrylic Sheet Manufacturer & Supplier",
    desc: "Delivering nationwide with certified quality, customized sheet sizes, precision thickness tolerances, and reliable factory pricing.",
    primaryBtnText: "Get in Touch",
    primaryBtnHref: "/contact-us",
    secondaryBtnText: "About Us",
    secondaryBtnHref: "/about-us",
    bgImage: "/images/5.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`hero-slide ${idx === current ? "active" : ""}`}
        >
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          <div className="hero-slide-overlay" />

          <div className="container" style={{ height: "100%" }}>
            <div className="hero-content">
              <span className="hero-tagline">{slide.tagline}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-desc">{slide.desc}</p>
              <div className="hero-buttons">
                <Link href={slide.primaryBtnHref} className="pxl-btn">
                  <span>{slide.primaryBtnText}</span>
                  <span className="btn-icon">
                    <ArrowRight size={15} />
                  </span>
                </Link>
                <Link href={slide.secondaryBtnHref} className="pxl-btn-accent">
                  <span>{slide.secondaryBtnText}</span>
                  <span className="btn-icon">
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <div className="hero-controls">
        <button
          type="button"
          onClick={prevSlide}
          className="hero-arrow"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="hero-dots">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`hero-dot ${idx === current ? "active" : ""}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          className="hero-arrow"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}
