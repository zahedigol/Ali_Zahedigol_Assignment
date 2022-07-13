/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary': '#4463bb',
      'secondary': '#ec1f60',
      'light-gray': '#ededee',
    },
    },
  },
  plugins: [],
}
