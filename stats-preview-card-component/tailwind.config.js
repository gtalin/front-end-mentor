/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html', './src/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['Lexend Deca', ...defaultTheme.fontFamily.serif]
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
      '16': '4rem',
    },
    extend: {
      colors: {
        primary: {
          'blue': {
            DEFAULT:'hsl(277, 64%, 61%)',
            'dark': 'hsl(233, 47%, 7%)',
            'desat': 'hsl(244, 38%, 16%)'
          },
          
        },
        neutral: {
          DEFAULT: 'hsla(0, 0%, 100%, 0.75)',
          'transparent-white': 'hsla(0, 0%, 100%, 0.6)'
        }
      },

      screens: {
        mobile: '375px',
        medium: '600px',
        desktop: '1440px',
      },
      
      backgroundImage: {
        'bg-pattern': 'url("./img/bg-pattern-desktop.svg")',
        'hero-img-desktop': 'url("./img/hero-desktop.jpg")',
        'hero-img-mobile': 'url("./img/hero-mobile.jpg")',
        
      },
      boxShadow: {
        'shadow-1': '0px 7px 16px 5px hsla(245, 75%, 52%, 0.3)',
        'shadow-2': '3px 3px 60px -15px rgba(0, 0, 0, 0.3), -1em 60px -15px rgba(0, 0, 0, 0.3)'
      }
      

    },
  },
  plugins: [],
}
