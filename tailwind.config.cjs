module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: '#fffdfa',
        sand: '#f9efe2',
        gold: '#c8a24c',
        anthracite: '#171717'
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Geist', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
