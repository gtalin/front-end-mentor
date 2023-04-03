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
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
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
        'error-icon':'url("./img/icon-error.svg")'
      },
      backgroundImage: {
        'bg-pattern': 'url("./img/bg-pattern-desktop.svg")',
        'hero-img-desktop': 'url("./img/hero-desktop.jpg")',
        'hero-img-mobile': 'url("./img/hero-mobile.jpg")',
        'custom-gradient': 'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%)), linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
        'custom-gradient-1': 'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%) )',
        'custom-gradient-2': 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
        'custom-grad-img': 'url("./img/bg-pattern-desktop.svg"), linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
        'custom-grad-img-2': 'url("./img/bg-pattern-desktop.svg"), linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))'
      },
      boxShadow: {
        'shadow-1': '0px 7px 16px 5px hsla(245, 75%, 52%, 0.3)',
        'shadow-2': '3px 3px 60px -15px rgba(0, 0, 0, 0.3), -1em 60px -15px rgba(0, 0, 0, 0.3)'
      }
      

    },
  },
  plugins: [],
}
