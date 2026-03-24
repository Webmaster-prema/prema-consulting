/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A9E0',
          dark: '#0088B8',
          light: '#E0F5FC',
        },
        dark: '#0F172A',
        accent: '#0F4C81',
        'brand-gray': '#334155',
        'light-gray': '#F8FAFC',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        '1200': '1200ms',
      },
    },
  },
  plugins: [],
}

