import { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { getPublicBlogs } from "@/lib/blogStorage";

const SITE_URL = "https://mahadevplastic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/acrylic-sheets`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/our-clients`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/our-work`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-conditions`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Specific Product pages
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.filter(p => p.slug !== "acrylic-sheets").map((prod) => ({
    url: `${SITE_URL}/${prod.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Blog posts
  const publicBlogs = getPublicBlogs();
  const blogRoutes: MetadataRoute.Sitemap = publicBlogs.map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: post.updatedAt || currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));


  return [...coreRoutes, ...productRoutes, ...blogRoutes];
}
