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
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '760px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '640px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max': '420px'},
      '2xs': {'max': '320px'},
    }
  },
  plugins: [],
};
