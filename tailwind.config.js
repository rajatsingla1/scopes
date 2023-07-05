/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        darkgray: '#121212',
        brandDark: '#34861a'
      }
    }
  },
  variants: {
    extend: {
      borderRadius: ['first', 'last']
    }
  },
  plugins: []
};