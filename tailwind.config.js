module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': "#49B1EB",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}