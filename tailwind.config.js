module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          100: '#5a698c'
        },
        white: '#fff',
        red: '#a11c29',
        black: '#000',
        green: '#32be50',
        orange: '#ff733c',
        icon: {
          orange: '#ff733c'
        }
      },
      minWidth: '500px'
    },
  },
  plugins: [],
}