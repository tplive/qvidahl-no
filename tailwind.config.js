module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ], 
  theme: {
    extend: {
      fontFamily: {
        cards: 'Lobster',
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
