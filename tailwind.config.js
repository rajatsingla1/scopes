/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        darkgray: '#121212',
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