const colors = require('tailwindcss/colors');

const config = {
  content: ["./src/**/*.{html,js,svelte,ts, md}"],
  darkMode: 'class', //false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: {
        50: "#f2f3f2",
        100: "#e5e6e6",
        200: "#cacecd",
        300: "#b0b5b3",
        400: "#959d9a",
        500: "#7b8481",
        600: "#626a67",
        700: "#4a4f4d",
        800: "#202322",
        900: "#191a1a"
      },
      blue: colors.blue,
      amber: colors.amber,
      green: colors.gray,
      slate: colors.slate,
      red: colors.red,
      yellow: colors.yellow,
      white: colors.white,
      black: colors.black
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
};

module.exports = config;
