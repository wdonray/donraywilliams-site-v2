module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'flower-background': "url('/flower.png')",
      },
      fontFamily: {
        body: ['EBGaramond'],
      },
    },
    colors: {
      orange: {
        light: '#fde2d1',
        DEFAULT: '#FBC6A4',
        dark: '#c65308',
      },
      pink: {
        light: '#f9d4d3',
        DEFAULT: '#FCD1D1',
        dark: '#b61917',
      },
      gray: {
        DEFAULT: '#f7f7f7',
      },
      green: {
        DEFAULT: '#D3E0DC',
      },
      teal: {
        DEFAULT: '#AEE1E1',
      },
      purple: {
        light: '#e6cad7',
        DEFAULT: '#CE97B0',
        dark: '#793956',
      },
      blue: {
        light: '#d7dce3',
        DEFAULT: '#AFB9C8',
        dark: '#4c5a6f',
      },
      white: {
        DEFAULT: '#FFF',
        dark: '#7f7f7f',
      },
      black: {
        light: '#7f7f7f',
        DEFAULT: '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
