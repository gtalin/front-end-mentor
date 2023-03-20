/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      sans: ['Karla', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    extend: {
      colors: {
        'primary-cyan': 'hsl(179, 62%, 43%)',
        'primary-yellow': 'hsl(71, 73%, 54%)',
        'n-light-gray': 'hsl(204, 43%, 93%)',
        'n-gray-blue': 'hsl(218, 22%, 67%)'
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      }
    },
  },
  plugins: [],
}
