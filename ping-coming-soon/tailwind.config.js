/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans]
    },
    fontWeight: {
      normal: '300',
      'semi-bold': '600',
      'bold': '700'
    },
    extend: {
      colors: {
        'primary': 'hsl(223, 87%, 63%)',
        'secondary-blue': 'hsl(223, 100%, 88%)',
        'secondary-red': 'hsl(354, 100%, 66%)',
        'neutral-gray': 'hsl(0, 0%, 59%)',
        'neutral-dark-blue': 'hsl(209, 33%, 12%)'
      },

      screens: {
        mobile: '375px',
        medium: '600px',
        desktop: '1440px',
      },
      backgroundImage: {
        'illustration': "url('./img/illustration-dashboard.png')",
      },
      boxShadow: {
        'shadow-1': '5px 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'shadow-2': '3px 3px 60px -15px rgba(0, 0, 0, 0.3), -1em 60px -15px rgba(0, 0, 0, 0.3)'
      }

    },
  },
  plugins: [],
}
