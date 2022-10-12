/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#6049B9",
      secondary: "#EB405F",
      tertiary: "#C0B9B0",
      white: colors.white,
      black: colors.black,
    },
    fontFamily: {
      space: ["Space Grotesk", "sans-serif"],
      helvetica: ["Helvetica Neue", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
