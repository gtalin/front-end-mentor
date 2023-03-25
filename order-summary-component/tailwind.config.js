/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html', './src/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Red Hat Display', ...defaultTheme.fontFamily.sans]
    },
    fontWeight: {
      normal: '500',
      'bold': '700',
      'black': '900'
    },
    extend: {
      colors: {
        primary: {
          pale: 'hsl(225, 100%, 94%)',
          DEFAULT: 'hsl(245, 75%, 52%)'
        },
        neutral: {
          pale: 'hsl(225, 100%, 98%)',
          desaturated: 'hsl(224, 23%, 55%)',
          dark: 'hsl(223, 47%, 23%)'
        }
      },

      screens: {
        mobile: '375px',
        card: '350px',
        medium: '600px',
        desktop: '1440px',
      },
      content: {
        'pattern-mobile': 'url("./img/pattern-background-mobile.svg")',
        'pattern-desktop': 'url("./img/pattern-background-desktop.svg")'

      },
      backgroundImage: {
        'pb-mobile': "url('./img/pattern-background-mobile.svg')",
        'pb-desktop': "url('./img/pattern-background-desktop.svg')",
      },
      boxShadow: {
        'shadow-1': '0px 7px 16px 5px hsla(245, 75%, 52%, 0.3)',
        'shadow-2': '3px 3px 60px -15px rgba(0, 0, 0, 0.3), -1em 60px -15px rgba(0, 0, 0, 0.3)'
      }

    },
  },
  plugins: [],
}
