// Ensure NODE_ENV is strictly production during builds even if the host platform injects a custom value
if (process.env.NODE_ENV !== "development" && process.env.NODE_ENV !== "test") {
  process.env.NODE_ENV = "production";
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
