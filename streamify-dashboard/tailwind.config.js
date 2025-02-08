/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ✅ This ensures Tailwind scans your files
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F46E5',
          dark: '#818CF8',
        },
        secondary: {
          light: '#10B981',
          dark: '#34D399',
        },
        accent: {
          light: '#F59E0B',
          dark: '#FBBF24',
        },
      },
    },
  },
  plugins: [],
};
