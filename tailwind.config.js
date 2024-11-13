/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage :{
        "hero-picture" : "url(../src/assets/hero-page/pink.jpg)"
      },
      textColor : {
        "golden-color" : "#FFD700"
      },
      backgroundColor :{
         "ash-color" : "#181818",
         "silver-color" : "#C3C3C2"
      }
    },
  },
  plugins: [],
}

