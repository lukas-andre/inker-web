/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        nexa: ["Nexa", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        blassed: ["Blassed Day", "sans-serif"],
      },
      colors: {
        purple1: "#0A031F",
        background: "var(--color-background)",
        accent: "var(--color-accent)",
        neutral: "var(--color-neutral)",
      },
    },
  },
  plugins: [],
};