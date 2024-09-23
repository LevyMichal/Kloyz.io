/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '390px',
      'md': '768px',
      'lg': '1440px',
      'xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

