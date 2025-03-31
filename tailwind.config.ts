/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: ["smooth"],
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #FFD700, #FF69B4, #8A2BE2)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
