/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      brand: {
        primary: '#FF2323',
        medgray: '#ECEAEA',
        lightgray: '#EEEEEE',
        gray: '#D9D9D9',
      },
    },
    extend: {},
  },
  plugins: [],
};
