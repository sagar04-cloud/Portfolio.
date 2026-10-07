/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F3F4FA',
        foreground: '#0B0D12',
        secondary: '#454759',
        muted: '#728DA6',
        accent: '#2D1FBE',
        border: '#E0E0E0',
        white: '#FFFFFF',
        'dark-bg': '#0B0D12',
        'dark-text': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
