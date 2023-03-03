/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      serif: ['Fraunces', ...defaultTheme.fontFamily.serif]
    },
    fontWeight: {
      normal: '500',
      bold: '700',
    },
    extend: {
      colors: {
        'primary-dark-cyan': {
          DEFAULT: 'hsl(158, 36%, 37%)',
          dark: '#1a4031'
        },
        'primary-cream': 'hsl(30, 38%, 92%)',
        'neutral-dark-blue': 'hsl(212, 21%, 14%)',
        'neutral-gray-blue': 'hsl(228, 12%, 48%)'

      },
      screens: {
        mobile: '380px',
        desktop: '1441px',
      },
    },
  },
  plugins: [],
}
