import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbBannerProps {
  title: string;
  items: BreadcrumbItem[];
}

export default function BreadcrumbBanner({ title, items }: BreadcrumbBannerProps) {
  return (
    <div className="page-banner">
      <div className="page-banner-overlay" />
      <div className="container page-banner-content">
        <h1 className="page-banner-title">{title}</h1>
        <div className="breadcrumb-trail">
          <Link href="/">Home</Link>
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="breadcrumb-separator">
                <ChevronRight size={14} />
              </span>
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
