/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-pallete': '#2D60FF',
        'gray-pallete': '#B1B1B1',
        'light-blue-pallete': '#F5F7FA',
        'medium-blue-pallete': '#718EBF',
        'bold-blue-pallete': '#343C6A',
        'accent-blue-pallete': '#1814F3',
      },
    },
  },
  plugins: [],
}
