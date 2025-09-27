/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Primary color: Parrot Green (#75fd71) - 30% of design
        primary: {
          50: '#f0fef0',
          100: '#dcfcdc',
          200: '#bbf7bb',
          300: '#8ef08a',
          400: '#75fd71', // Main parrot green
          500: '#4ade4a',
          600: '#2fb82f',
          700: '#259025',
          800: '#1f7020',
          900: '#1a5c1a',
        },
        // Secondary color: Orange (#ff6b35) - 10% of design  
        secondary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff6b35', // Main orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Neutral colors: White and grays - 60% of design
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}