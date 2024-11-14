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
         "silver-color" : "#C3C3C2",
         "golden-color" : "#FFD700"
      },
        keyframes: {
          slideIn: {
            '0%': { opacity: '0', transform: 'translateY(-20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideOut: {
            '0%': { opacity: '1', transform: 'translateY(0)' },
            '100%': { opacity: '0', transform: 'translateY(-20px)' },
          },
        },
        animation: {
          slideIn: 'slideIn 0.5s ease forwards',
          slideOut: 'slideOut 0.5s ease forwards',
      
      },
    },
  },
  plugins: [],
}

