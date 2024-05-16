/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary": "#E3F3FF",
        "text-primary": "#5BB9FF",
        "lightgray": "#F9F9F9",
      },
      fontFamily: {
        Roboto: ['Roboto', 'san-serif']
      },
      screens: {
        "min-lg": "1240px",
      },
=======
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD8E1",
        primary2: "#FCE4EC"
      }
>>>>>>> 61e6fe2dac5617ea3fd0b7a85cd0d917d6de8f34
    },
  },
  plugins: [],
};

