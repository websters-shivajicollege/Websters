/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '4.052rem',
        '7xl': '5.052rem',
        '9xl': '12.052rem',
      '12xl': '17rem',
    },
    extend: {
      fontFamily:{
        'anton' : ['Anton'],
        'poppins' : ['Poppins'],
      }
    },
  },
  plugins: [],
  
}