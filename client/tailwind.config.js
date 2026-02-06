/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green-dark': '#073522',
        'brand-green-light': '#E3F1E5',
        'brand-peach': '#E8E4FF',
        'brand-primary': '#006DFF',
        'brand-text': '#191919',
        'brand-text-light': '#555555',
        'brand-blob-bg': '#C6C5FF',
      },
      backgroundImage: {
        'dot-pattern': "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
      },
      animation: {
        'scroll-left': 'scroll-left 20s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradient-shift 5s ease-in-out infinite',
        'breathing': 'breathing 2s ease-in-out infinite',
        'glow': 'glow 8s ease-in-out infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'infinite-scroll': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'breathing': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'glow': {
          '0%, 100%': { opacity: '0.4', transform: 'rotate(0deg) scale(1)' },
          '50%': { opacity: '0.6', transform: 'rotate(180deg) scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
