/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html', './src/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Barlow', ...defaultTheme.fontFamily.sans],
      serif: ['Fraunces', ...defaultTheme.fontFamily.serif]
    },
    fontWeight: {
      normal: '500',
      'bold': '700',
      'black': '900'
    },
    extend: {
      colors: {
        primary: {
          red: 'hsl(7, 99%, 70%)',
          yellow: 'hsl(51, 100%, 49%)',
          cyan: 'hsl(167, 40%, 24%)',
          'dark-blue': 'hsl(198, 62%, 26%)',
          'dark-cyan': 'hsl(168, 34%, 41%)'
        },
        neutral: {
          'desaturated-blue': 'hsl(212, 27%, 19%)',
          'vd-gray-blue': 'hsl(213, 9%, 39%)',
          'dark-gray-blue': 'hsl(232, 10%, 55%)',
          'gray-blue': 'hsl(210, 4%, 67%)'
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
