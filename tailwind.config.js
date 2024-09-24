/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['"SF Pro"', 'sans-serif'],
      },
      colors: {
        primary: '#00C853', // El verde que usaste en el diseño
        'primary-dark': '#009624', // Para hover u otros estados
      },
      fontFamily: {
        sans: ['SF Pro', 'sans-serif'], // Añadir SF Pro como fuente primaria
      },
    },
  },
  plugins: [],
}
