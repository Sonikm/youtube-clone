/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        black: "#0F0F0F",
        gray: {
          100: "#F8F8F8",
          200: "#F2F2F2",
          300: "#D3D3D3",
        },
      },
    },
  },
  plugins: [],
};
