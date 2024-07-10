/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: 'Cabin, sans-serif',
    },
    extend: {
      colors: {
        white: '#f3fcf9',
        altwhite: '#eaffeb',
        'green-600': '#3ba74c',
        'green-900': '#0f4d23',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
