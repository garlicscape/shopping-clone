/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#f87171',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.png')`,
      },
    },
  },
  plugins: [],
};
