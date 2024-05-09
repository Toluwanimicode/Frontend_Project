/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maincolor: '#E447FA',
        shadeofpurple:'#9B1DD0',
        purple2: "#750b88"
      }
    },
  },
  plugins: [],
}

