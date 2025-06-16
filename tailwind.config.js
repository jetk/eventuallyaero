/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        holo: {
          50: '#f0fdff',
          100: '#ccf7fe',
          200: '#99effd',
          300: '#5ce1fc',
          400: '#22c8f8',
          500: '#07a6e3',
          600: '#0284c7',
          700: '#0369a1',
          800: '#164e63',
          900: '#0c2e3a',
        },
        neon: {
          purple: '#a855f7',
          pink: '#ec4899',
          cyan: '#06b6d4',
          teal: '#14b8a6',
        }
      },
      backgroundImage: {
        'holo-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #06b6d4 50%, #14b8a6 75%, #a855f7 100%)',
        'holo-card': 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(20, 184, 166, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%)',
      }
    },
  },
  plugins: [],
}
