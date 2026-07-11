/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF6EB',
          100: '#F5E9CC',
          200: '#EDD9A7',
          300: '#E5C982',
          400: '#D4B06A',
          500: '#C8A15A',
          600: '#B08A45',
          700: '#8E6F37',
          800: '#6B5329',
          900: '#48381B',
        },
        dark: {
          50: '#2A2A2A',
          100: '#222222',
          200: '#1A1A1A',
          300: '#151515',
          400: '#111111',
          500: '#0D0D0D',
          600: '#0A0A0A',
          700: '#070707',
          800: '#040404',
          900: '#010101',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-down': 'fadeInDown 1s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'gold': '0 0 20px rgba(200, 161, 90, 0.3)',
        'gold-lg': '0 0 40px rgba(200, 161, 90, 0.4)',
        'gold-xl': '0 0 60px rgba(200, 161, 90, 0.3)',
      },
    },
  },
  plugins: [],
}
