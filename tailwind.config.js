// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          900: '#0A1026', // The dark blue/navy color used in the team and footer sections
        },
        'yellow': {
          400: '#FFCC00', // The bright yellow used in the hero section
          200: '#FFDD66', // The lighter yellow used for stats
        }
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};