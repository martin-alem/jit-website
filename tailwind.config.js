/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d7d7d7",
          200: "#b0b0b0",
          300: "#888888",
          400: "#616161",
          500: "#393939",
          600: "#2e2e2e",
          700: "#222222",
          800: "#171717",
          900: "#0b0b0b",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")],
};
