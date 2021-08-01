module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        body: ['Inter', 'sans-serif']
      },
      spacing: {
        '72': '18rem'
      }
    },
  },
  variants: { // used to refer to hover, active, breakpoints
    extend: {
      backgroundColor: ['active'],
      // fontSize: ['hover']    enable text scaling
    },
  },
  plugins: [],
}
