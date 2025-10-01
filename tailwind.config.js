/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#7e22ce",
        secondary: "#9333ea",
        accent: "#facc15",
      },
      animation: {
        gradient: "gradientBG 6s ease infinite",
      },
      keyframes: {
        gradientBG: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      dropShadow: {
        glow: "0 0 10px rgba(147, 51, 234, 0.6)",
      },
    },
  },
  plugins: [],
};
