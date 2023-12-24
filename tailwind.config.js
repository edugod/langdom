/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#203B8F',
        secondary: '#E52620',
        tertiary: '#9D9D9C',
        offwhite: '#FEFEFE'
      },
    },
  },
  plugins: [],
}