/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      sans: ['Epilogue', ...defaultTheme.fontFamily.sans]
    },
    fontWeight: {
      normal: '500',
      bold: '700'
    },
    extend: {
      colors: {
        'neutral-white': 'hsl(0, 0%, 98%)',
        'neutral-gray': 'hsl(0, 0%, 41%)',
        'neutral-black': 'hsl(0, 0%, 8%)'
      },

      screens: {
        mobile: '375px',
        medium: '600px',
        desktop: '1440px',
      },
      backgroundImage: {
        'mobile-hero': "url('./img/image-hero-mobile.png')",
        'desktop-hero': "url('./img/image-hero-desktop.png')",
        'menu': "url('./img/icon-menu.svg')",
        'menu-close': "url('./img/icon-close-menu.svg')",
        'arrow-up': "url('./img/icon-arrow-up.svg')",
        'arrow-down': "url('./img/icon-arrow-down.svg')",
      },
      boxShadow: {
        'sub': '5px 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'sub-menu': '3px 3px 60px -15px rgba(0, 0, 0, 0.3), -1em 60px -15px rgba(0, 0, 0, 0.3)'
      }

    },
  },
  plugins: [],
}
