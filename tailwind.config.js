/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./dist/index.html", "./src/**/*.{html,js}"],
  safelist: ['right-[-100%]', 'right-0'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

