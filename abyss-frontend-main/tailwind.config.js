const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      colors: {
        orange: '#ed7c50',
        darkOrange: '#d96d43',
        darkGrey: '#595959',
        lightGrey: '#8a8a8a',
        green: '#43ae61',
        purple: '#8566f6',
        turks: '#a6e2e3',
        red: '#e46060',
        black: '#282829',
        white: '#f5f4f5',
      },
      keyframes: {
        blur: {
          '0%': { filter: 'blur(0px)' },
          '100%': { filter: 'blur(5px)' },
        },
      },
      animation: {
        blur: 'blur 2s linear infinite',
      },
    },
  },
  plugins: [],
});
