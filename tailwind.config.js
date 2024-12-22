/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',   // Small blur
        sm: '4px',   // Medium blur
        lg: '8px',   // Large blur 
      },
      colors: {
        'custom-green': '#6A9C89',
        'custom-light-green': '#C1D8C3',
        'custom-cream': '#FFF5E4',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
