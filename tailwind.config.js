/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        capi: {
          orange: '#FF6B35',
          'orange-dark': '#E85A2A',
          cyan: '#00D4AA',
          'cyan-dark': '#00B894',
          dark: '#0A0F1C',
          surface: '#1A1F2E',
          'surface-light': '#242938',
          border: '#2D3344'
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
