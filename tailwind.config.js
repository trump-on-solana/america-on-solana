/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      textShadow: {
        white: "0 4px 6px rgba(255, 255, 255, 0.5)",
      },
      dropShadow: {},
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "2px 2px 0 #000",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
