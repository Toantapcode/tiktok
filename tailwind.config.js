/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '60px': '60px',
      },
      width:{
        '1150px': '1150px',
        '356px':'356px',
      },
      minHeight:{
        '1000px':'1000px',
      }
    },
  },
  plugins: [],
}

