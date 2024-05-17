/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#E3F3FF",
        "text-primary": "#5BB9FF",
        lightgray: "#F9F9F9",
        "azure-radiance": {
          50: "#edfaff",
          100: "#d6f3ff",
          200: "#b5ecff",
          300: "#83e2ff",
          400: "#48cfff",
          500: "#1eb1ff",
          600: "#0694ff",
          700: "#0080ff",
          800: "#0861c5",
          900: "#0d549b",
          950: "#0e335d",
        },
      },
    },
  },
  plugins: [],
};

