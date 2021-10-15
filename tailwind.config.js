module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'bar': '#3F98A0',
      'menu': '#1E2736',
      'footer': '#212C3E',
      'menu-active': '#797D86',

    }),

    extend: {
      fontFamily: {
        'Roboto': ['Roboto'],
        'Open_Sans': ['Open Sans'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
