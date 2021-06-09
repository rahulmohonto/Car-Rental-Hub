const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {

      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      green: colors.green,
      gray: colors.trueGray,
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      indigo: colors.indigo,
      blue: colors.blue,
      red: colors.rose,
      yellow: colors.amber,
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
