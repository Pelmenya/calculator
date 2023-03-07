/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['HelveticaNeueCyr', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
