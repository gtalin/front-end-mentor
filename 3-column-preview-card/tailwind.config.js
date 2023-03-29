/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html', './src/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
      cursive: ['Big Shoulders Display']
    },
    fontWeight: {
      normal: '400',
      'bold': '700',
    },
    extend: {
      colors: {
        primary: {
          'bright-orange': 'hsl(31, 77%, 52%)',
          'dark-cyan': 'hsl(184, 100%, 22%)',
          'very-dark-cyan': 'hsl(179, 100%, 13%)'
        },
        neutral: {
          'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
          'very-light-gray': 'hsl(0, 0%, 95%)'
        }
      },

      screens: {
        mobile: '375px',
        medium: '600px',
        desktop: '1440px',
      },
      content: {
        'pattern-mobile': 'url("./img/pattern-background-mobile.svg")',
        'pattern-desktop': 'url("./img/pattern-background-desktop.svg")'

      },
      backgroundImage: {
        'hero-img-mobile': 'url("./img/mobile/image-header.jpg")',
        'hero-img-desktop': 'url("./img/desktop/image-header.jpg")'
      },
      boxShadow: {
        'shadow-1': '0px 7px 16px 5px hsla(245, 75%, 52%, 0.3)',
        'shadow-2': '3px 3px 60px -15px rgba(0, 0, 0, 0.3), -1em 60px -15px rgba(0, 0, 0, 0.3)'
      }

    },
  },
  plugins: [],
}
