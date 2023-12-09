/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C3B90',
        secondary: '#E51E20',
        tertiary: '#9D9D9C',
        offwhite: '#FEFEFE'
      },
    },
  },
  plugins: [],
}