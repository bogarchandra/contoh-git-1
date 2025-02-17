/* @type {import('tailwindcss').Config}*/
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    colors: {
      'yellow': '#fca311',
      'grey': '#e5e5e5'
    }
  },
  plugins: [],
}