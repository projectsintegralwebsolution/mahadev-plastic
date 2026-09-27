import type { Metadata, Viewport } from "next";
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
