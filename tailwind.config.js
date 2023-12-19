/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightgradient1': '#B1C9EF',
        'lightgradient2': '#5E96EE',
        'darkgradient1': '#1C3144',
        'darkgradient2': '#041320',
        'lighttext': '#D9E8F7',
        'darktext': '#081726',
        'lightheader': '#D5DEEF',
        'darkheader': '#284661',
      }
    },
  },
  plugins: [require("daisyui")],
}

