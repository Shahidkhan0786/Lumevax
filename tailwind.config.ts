import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A33FF", // Dominant blue
          light: "#637DFF", // Soft blue
          dark: "#001F99", // Deep blue
        },
        secondary: {
          DEFAULT: "#FF3B30", // Strong red
          light: "#FF746E", // Warm coral red
          dark: "#B22222", // Crimson red
        },
        accent: {
          DEFAULT: "#FFB800", // Bright yellow
          light: "#FFD966", // Soft golden yellow
          dark: "#CC8C00", // Deep mustard
        },
        highlight: {
          DEFAULT: "#00B388", // Vibrant teal
          light: "#5CD6C3", // Minty green
          dark: "#008066", // Deep teal
        },
        deep: {
          DEFAULT: "#7F00FF", // Vibrant purple
          light: "#B266FF", // Lavender purple
          dark: "#4D0099", // Royal purple
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
