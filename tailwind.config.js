/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#FF6A1A",
      black: "#212337",
      green: "#749B3F",
      white:"#FFFFFF",
      grey: {
        100: "#4A4A52",
        80: "#A6A6A6",
        50: "#D9D9D9",
        20: "#F4F6F6",
      },
    },
  },
  plugins: [],
};
