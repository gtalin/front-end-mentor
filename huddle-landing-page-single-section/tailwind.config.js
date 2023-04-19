/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html', './src/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      sans2: ['Poppins', ...defaultTheme.fontFamily.sans],
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
      '75%': '75%',
      '150%': '150%',
      '200%': '200%',
      '16': '4rem',
    },
    extend: {
      fontSize:{
        'dynamic-body': "clamp(1.00rem, 0.36vw + 0.93rem, 1.25rem)",
        'dynamic-heading': "clamp(1.5rem, 1.43vw + 1.21rem, 2.5rem)"
      },
      padding: {
        dynamic: "clamp(1.13rem, 5.54vw + 0.02rem, 5.00rem);"
      },
      width: {
        'dynamic-content': "clamp(10rem, 7.14vw + 8.57rem, 15.00rem);"
      },
      colors: {
        primary: {
          'violet': 'hsl(257, 40%, 49%)',
          
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
        'desktop': 'url("./img/bg-desktop.svg")',
        'mobile': 'url("./img/bg-mobile.svg")',
      },
      boxShadow: {
        'shadow-1': '0px 5px 10px 3px rgba(0,0,0, 0.3)',
        'shadow-2': '0px 7px 16px 5px rgba(0,0,0, 0.4)',
        'shadow-3': '3px 3px 60px -15px rgba(0, 0, 0, 0.3), -1em 60px -15px rgba(0, 0, 0, 0.3)'
      }


    },
  },
  plugins: [],
}
