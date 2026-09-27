import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: "#ff7522",
          "primary-hover": "#e65e0d",
          secondary: "#021330",
          navy: "#010e3a",
          dark: "#121315",
          "dark-sub": "#1e2023",
          accent: "#ffca3b",
          light: "#f8f9fa",
          border: "#eaeaea",
          muted: "#666666",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        heading: ["var(--font-barlow)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 15px 40px rgba(255, 117, 34, 0.15)",
        header: "0 4px 20px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
