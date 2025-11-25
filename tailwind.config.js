/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lagunitas-red': '#c71d1d',
        'lagunitas-dark-red': '#991b1b',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        dosis: ['Dosis', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
