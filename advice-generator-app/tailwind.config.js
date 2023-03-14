/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      sans: ['Manrope', ...defaultTheme.fontFamily.sans],
    },
    
    extend: {
      fontWeight: {
        extrabold: '800'
      },
      colors: {
        'primary-light-cyan': 'hsl(193, 38%, 86%)',
        'primary-neon-green': 'hsl(150, 100%, 66%)',
        'n-gray-blue': 'hsl(217, 19%, 38%)',
        'n-dark-gray-blue': 'hsl(217, 19%, 24%)',
        'n-dark-blue': 'hsl(218, 23%, 16%)'
      },
      backgroundImage: theme => ({
        'mobile-divider': "url('./img/pattern-divider-mobile.svg')",
        'desktop-divider': "url('./img/pattern-divider-desktop.svg')",
      }),
      content: theme => ({
        'link': 'url("./img/icon-dice.svg")',
      }),
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      dropShadow: {
        'neon-1': '0 0px 12px hsla(150, 100%, 66%, .90)',
        'neon-2': [
          '0 35px 35px hsla(150, 100%, 66%, 0.25)',
            '0 45px 65px hsla(150, 100%, 66%, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}
