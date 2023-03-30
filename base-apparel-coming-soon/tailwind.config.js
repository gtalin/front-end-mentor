/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html', './src/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      'bold': '700',
    },
    extend: {
      colors: {
        primary: {
          'red': {
            DEFAULT:'hsl(0, 36%, 70%)',
            'soft': 'hsl(0, 93%, 68%)'
          },
          
        },
        neutral: {
          'gray-red': 'hsl(0, 6%, 24%)',
        }
      },

      screens: {
        mobile: '375px',
        medium: '600px',
        desktop: '1440px',
      },
      content: {
      },
      backgroundImage: {
        'bg-pattern-desktop': 'url("./img/bg-pattern-desktop.svg")',
        'hero-img-desktop': 'url("./img/hero-desktop.jpg")',
        'hero-img-mobile': 'url("./img/hero-mobile.jpg")'
      },
      boxShadow: {
        'shadow-1': '0px 7px 16px 5px hsla(245, 75%, 52%, 0.3)',
        'shadow-2': '3px 3px 60px -15px rgba(0, 0, 0, 0.3), -1em 60px -15px rgba(0, 0, 0, 0.3)'
      }

    },
  },
  plugins: [],
}
