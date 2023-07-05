/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'gray-100': '#EEEEEE',
      },
      fontFamily:{
        'body':['Roboto'],
        'heading': ['Oswald']
      }
    },
  },
  plugins: [],
};
