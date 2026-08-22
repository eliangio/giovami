/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blu-notte': '#1C2E5E',
        arancio: '#EE7623',
        calce: '#F1EFE6',
        'grigio-caldo': '#8A8672',
        'oliva-scuro': '#4A4A3E',
        inchiostro: '#333329',
        avorio: '#FBFAF6',
      },
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
        narrow: ['"Archivo Narrow"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
