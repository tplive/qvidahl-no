module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    layers: ['base'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'cards': 'Lobster',
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
