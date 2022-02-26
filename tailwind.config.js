module.exports = {
  darkMode: 'media',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'search-light': 'radial-gradient(50% 118.54% at 50% 27.42%, #008080 0%, #C4C4C4 100%)',
        'search-dark':'radial-gradient(50% 118.54% at 50% 27.42%, #005051 0%, #494B4B 100%)',
        'logo-dark': 'url("../images/logo-dark.png")',
        'logo-light': 'url("../images/logo-light.png")',
      }),
      fontFamily: {
        'roboto': ['Roboto Serif', "sans-serif"]
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    }
  },
  plugins: [],
}
