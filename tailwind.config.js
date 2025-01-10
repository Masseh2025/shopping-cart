/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#C73B0F",
      rose: {
        900: "#260F08",
        500: "#87635A",
        400: "#AD8A85",
        300: "#CAAFA7",
        100: "#F5EEEC",
        50: "#FCF8F6",
      },
      green: "#1EA575",
      black: "#000000",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
