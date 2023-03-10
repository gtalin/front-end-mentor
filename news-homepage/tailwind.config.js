/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
      'super-bold': '800'
    },
    extend: {
      colors: {
        'primary-orange': 'hsl(35, 77%, 62%)',
        'primary-red': 'hsl(5, 85%, 63%)',
        'n-off-white': 'hsl(36, 100%, 99%)',
        'n-gray-blue': 'hsl(233, 8%, 79%)',
        'n-dark-gray-blue':'hsl(236, 13%, 42%)',
        'n-very-dark-blue':'hsl(240, 100%, 5%)'
      },
      screens: {
        mobile: '376px',
        medium: '600px',
        desktop: '1441px'
      }
    },
  },
  plugins: [],
}
