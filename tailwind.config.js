/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        userSoftBlue: "hsl(215, 51%, 70%)",
        userCyan: "hsl(178, 100%, 50%)",
        userTransparentCyan: "hsla(178, 100%, 50%, 0.5)",
        userMainBG: "hsl(217, 54%, 11%)",
        userCardBG: "hsl(216, 50%, 16%)",
        userLineBlue: "hsl(215, 32%, 27%)",
        userWhite: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}