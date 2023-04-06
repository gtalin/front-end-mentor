/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html', './src/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      normal: '400',
      'bold': '700',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '150%': '150%',
      '200%': '200%',
      '16': '4rem',
    },
    extend: {
      colors: {
        primary: {
          'red': 'hsl(14, 88%, 65%)',
          'blue':'hsl(238, 29%, 16%)'
        },
        gradient: {
          start: 'hsl(273, 75%, 66%)',
          end: 'hsl(240, 73%, 65%)'
        },
        neutral: {
          'gray-blue': {
            300: 'hsl(240, 5%, 91%)',
            DEFAULT: 'hsl(240, 6%, 50%)',
            600: 'hsl(237, 12%, 33%)'
          }
        }
      },

      screens: {
        mobile: '375px',
        medium: '600px',
        desktop: '1440px',
      },
      content: {
        'cube-img':'url("./img/illustration-box-desktop.svg")'
      },
      backgroundImage: {
        'pattern-dekstop': 'url("./img/bg-pattern-desktop.svg")',

        'pattern-mobile': 'url("./img/bg-pattern-mobile.svg")',

        'header-img-desktop': 'linear-gradient(0deg, hsla(277, 64%, 61%,0.8), hsla(277, 64%, 61%,0.8)), url("./img/image-header-desktop.jpg") ',
        'header-img-mobile': 'linear-gradient(0deg, hsla(277, 64%, 61%,0.6), hsla(277, 64%, 61%,0.6)), url("./img/image-header-mobile.jpg")',
        
        'illustration-desktop': 'url("./img/illustration-woman-online-desktop.svg")',
        'illustration-mobile': 'url("./img/illustration-woman-online-mobile.svg")',
        'cube-img':'url("./img/illustration-box-desktop.svg")',

        'custom-grad-img': 'url("./img/bg-pattern-desktop.svg"), linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
        
      },
      boxShadow: {
        'shadow-1': '0px 7px 16px 5px hsla(245, 75%, 52%, 0.4)',
        'shadow-2': '0px 7px 16px 5px rgba(0,0,0, 0.4)',
        'shadow-3': '3px 3px 60px -15px rgba(0, 0, 0, 0.3), -1em 60px -15px rgba(0, 0, 0, 0.3)'
      }
      

    },
  },
  plugins: [],
}
