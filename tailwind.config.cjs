/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontSize: {
        
        "12xl": "17rem",
      },
      fontFamily: {
        anton: ["Anton"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
