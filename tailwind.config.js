/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'grey': '#eeeeee',
        'tosca': '#108B9E',
        'dark-blue': '#2E57A0',
        'dark-grey': '#313131',
        'dark-tosca': '#0b5c68',
        
      },
      backgroundImage: {
        'kebun-bg': "url(/public/Basemap-darken.jpg)",
        'hidro-bg': "url(/public/Background Hidrogeologis.jpg)",
      }, 
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}