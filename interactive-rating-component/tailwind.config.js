/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      sans: ['Overpass', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      normal: '400',
      bold: '700'
    },
    extend: {
      colors: {
        primary: 'hsl(25, 97%, 53%)',
        'neutral-light-gray': 'hsl(217, 12%, 63%)',
        'neutral-medium-gray': 'hsl(216, 12%, 54%)',
        'neutral-dark-blue': {
          'light': '#262f38',
          DEFAULT: 'hsl(213, 19%, 18%)'
        },
        'neutral-verydark-blue': 'hsl(216, 12%, 8%)',
        'attribution': 'hsl(228, 45%, 44%)'
      },
      screens: {
        mobile: '376px',
        desktop: '1441px'
      }
    },
  },
  plugins: [],
}
