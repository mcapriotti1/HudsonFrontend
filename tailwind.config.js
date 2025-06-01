/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // All JS, JSX, TS, TSX files inside src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d3cdbb", 
        background: "#eae9e5",
        maintext: "#3d3d3b", 
        secondarytext: "#c6c1b7",
        button: "#8f9283",
        buttonhover: "#000000",
      },
      fontFamily: {
        heading: ["Playfair Display", "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
