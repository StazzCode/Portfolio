/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:
    {
    extend: {
      colors: {
        'lighttext': '#D9E8F7',
        'darktext': '#081726',
      }
    },
  },
  daisyui: {
    themes: [
      {
        lightTheme: {
          ".header": {
            "background-color":'#D5DEEF',
          },
          ".footer": {
            "background-color":'#D5DEEF',
          },
          ".body": {
            "background":"linear-gradient(to right, #B1C9EF 5%, #5E96EE 100%)",
            "color":"#081726",
          },
          ".box": {
            "background-color":"#D5DEEF",
          },
          ".boxHeader": {
            "background-color":"rgb(241 245 249)",
          },
          ".card": {
            "background-color":"#D5DEEF",
          },
          ".svgicon": {
            "fill":'#081726',
          },
        },
      },
      {
        darkTheme: {
          ".header": {
            "background-color":'#284661',
          },
          ".footer": {
            "background-color":'#284661',
          },
          ".body": {
            "background":"linear-gradient(to right, #1C3144 5%, #041320 100%)",
            "color":"#D9E8F7",
          },
          ".box": {
            "background-color":"#284661",
          },
          ".boxHeader": {
            "background-color":"rgb(30 41 59)",
          },
          ".card": {
            "background-color":"#284661",
          },
          ".svgicon": {
            "fill":'#D9E8F7',
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

