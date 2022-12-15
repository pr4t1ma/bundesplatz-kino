/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      brand: {
        primary: "#FFAD0D",
        medgray: "#ECEAEA",
        lightgray: "#EEEEEE",
        gray: "#D9D9D9",
      },
      booking: {
        reserved: "#e30",
        available: "#444",
        booked: "#0c0",
        selected: "#dc0",
      },
    },
    extend: {},
  },
  plugins: [],
};
