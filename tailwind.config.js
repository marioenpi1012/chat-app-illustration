/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Rubik' : ['Rubik','sans-serif']
      },
      colors:{
        'Light-Grayish-Violet': 'hsl(270,20%,96%)', // App Background
        'Light-Magenta' : 'hsl(293,100%,63%)', // Background Color 
        'Light-Violet' : 'hsl(264,100%, 61%)', // Background Color
        'Pale-Violet' : 'hsl(276,100%, 81%)', // Subheading top of UI
        'Moderate-Violet': 'hsl(276,55%,52%)', // Left Chat
        'Desaturated-Dark-Violet' : 'hsl(271,15%,43%)', // Right Chat
        'Grayish-Blue' : 'hsl(206, 6%, 79%)', // Place holder
        'Very-Dark-Desaturated-Violet' : 'hsl(271, 36%, 24%)', // Main Heading, Submit button Background
        'Dark-Grayish-Violet' : 'hsl(270, 7%, 64%)', // Paragraph
        'White':' hsl(0, 0%, 100%)' ,
        'Very-Light-Magenta' : 'hsl(289, 100%, 72%)', // Radio Buttons
      },
      screens:{
        'xl':'1440px',
        '2xl':'1920px'
      }

    },
  },
  plugins: [],
}