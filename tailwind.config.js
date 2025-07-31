/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'quiz-green': '#10B981',
        'quiz-red': '#EF4444',
        'quiz-gray': '#6B7280'
      }
    },
  },
  plugins: [],
} 