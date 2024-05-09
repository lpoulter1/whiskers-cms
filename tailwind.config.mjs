import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,vue}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      // padding: "2rem",
      padding: 0,

      // padding: {
      //   DEFAULT: "0", // padding for 'sm' and smaller screens
      //   // md: '2rem', // padding for 'md' and larger screens
      //   // "2xl": "2rem", // padding for '2xl' and larger screens
      // },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Quicksand Variable", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],

};
