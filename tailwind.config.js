/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#6049B9",
      secondary: "#EB405F",
      tertiary: "#C0B9B0",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      space: ["Space Grotesk", "sans-serif"],
      helvetica: ["Helvetica Neue", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
