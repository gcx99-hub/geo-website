/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#1E3A5F',
        'sage-green': '#3A7D76',
        'warm-gold': '#E8B86B',
        'warm-sand': '#F4F0E6',
        'card-white': '#FFFFFF',
        'border-light': '#E2DCD0',
        'text-primary': '#2C3A3A',
        'text-secondary': '#8A9A8E',
        'easy-bg': '#DCFCE7',
        'easy-text': '#16A34A',
        'medium-bg': '#FEF9C3',
        'medium-text': '#CA8A04',
        'hard-bg': '#FFE4E6',
        'hard-text': '#E11D48',
        'unknown-bg': '#F3E8FF',
        'unknown-text': '#7C3AED',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        'content': '1120px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
