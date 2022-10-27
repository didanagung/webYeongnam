/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      squarePeg: ["Square Peg", "cursive"],
      tapestry: ["Tapestry", "cursive"],
      waterBrush: ["Water Brush", "cursive"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        corporate: {
          ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
          primary: "#005A87",
        },
      },
    ],
    darkTheme: "corporate",
  },
};
