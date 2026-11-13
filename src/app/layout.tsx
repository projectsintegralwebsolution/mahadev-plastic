import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D1B5F",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mahadevplastic.com"),
  title: {
    default: "Home | Acrylic Sheet Manufacturer in India | Mahadev Plastic",
    template: "%s | Mahadev Plastic",
  },
  description:
    "Mahadev Plastic is a trusted acrylic sheet manufacturer in India offering transparent, frosted, cast & custom acrylic sheets with high quality, durability, and nationwide delivery.",
  keywords: [
    "Acrylic Sheet Manufacturer",
    "acrylic sheet manufacturer in India",
    "acrylic sheet manufacturer Mumbai",
    "acrylic sheets India price",
    "transparent acrylic sheet manufacturer",
    "frosted acrylic sheet supplier India",
    "cast acrylic sheet manufacturer India",
    "custom acrylic sheet manufacturer",
    "acrylic plastic sheet manufacturers India",
    "acrylic sheet exporters India",
    "best acrylic sheet company in India",
  ],
  authors: [{ name: "Mahadev Plastic" }],
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Home | Acrylic Sheet Manufacturer in India | Mahadev Plastic",
    description:
      "Mahadev Plastic is a trusted acrylic sheet manufacturer in India offering transparent, frosted, cast & custom acrylic sheets with high quality, durability, and nationwide delivery.",
    url: "https://mahadevplastic.com",
    siteName: "Mahadev Plastic",
    images: [
      {
        url: "/images/3.jpg",
        width: 1920,
        height: 889,
        alt: "Mahadev Plastic - Acrylic Sheet Manufacturer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical LCP Hero image (Responsive Mobile + Desktop) */}
        <link
          rel="preload"
          as="image"
          href="/images/3-mobile.webp?v=2"
          type="image/webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/3.webp?v=2"
          type="image/webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        {/* Non-blocking Google Fonts Preconnect & Async Preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=optional"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=optional';document.head.appendChild(l);})();`,
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=optional"
          />
        </noscript>
        {/* Interaction & Idle Google Tag Manager Loader */}
        <Script id="gtm-loader" strategy="afterInteractive">
          {`
            (function() {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NZCV3S3911', { send_page_view: true });

              var loaded = false;
              function loadGTM() {
                if (loaded) return;
                loaded = true;
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://www.googletagmanager.com/gtag/js?id=G-NZCV3S3911';
                document.head.appendChild(s);
              }

              ['scroll', 'touchstart', 'mousemove', 'keydown', 'click'].forEach(function(e) {
                window.addEventListener(e, loadGTM, { once: true, passive: true });
              });
              if ('requestIdleCallback' in window) {
                requestIdleCallback(function() { setTimeout(loadGTM, 3500); });
              } else {
                setTimeout(loadGTM, 3500);
              }
            })();
          `}
        </Script>
        <meta name="theme-color" content="#0D1B5F" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
