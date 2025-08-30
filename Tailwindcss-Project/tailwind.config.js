/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "sidd": "#5CE65C",
      },
      fontFamily: {
        "sidd-font": "cursive",
      }
    },
  },
  plugins: [],
}