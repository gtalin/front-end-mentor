/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Hanken Grotesk', ...defaultTheme.fontFamily.sans]
    },
    fontWeight: {
      normal: '500',
      bold: '700',
      extrabold: '800'
    },
    extend: {
      colors: {
        'light-red': 'hsl(0, 100%, 67%)',
        'orange-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
        'linear-grad-1': 'hsl(252, 100%, 67%)',
        'linear-grad-2': 'hsl(241, 81%, 54%)',
        'circle-grad-1':'hsla(256, 72%, 46%, 1)',
        'circle-grad-2': 'hsla(241, 72%, 46%, 0)'
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      },
      
    },
    
  },
  plugins: [],
}
