/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-white': '#FFFFFF',
        'brand-extra-light': '#F5F5F7',
        'brand-light-gray': '#D2D2D7',
        'brand-gray': '#808080',
        'brand-dark-gray': '#424245',
        'brand-black': '#121212',
        'status-success': '#32936F',
        'status-error': '#F55F56',
      },
      fontFamily: {
        base: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
