/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "animation": {
        "horizontal-bounce": "horizontal-bounce 0.6s ease-in-out"
      },
      "horizontal-bounce": {
        "0%, 100%": {
          "transform": "translateX(0)"
        },
        "50%": {
          "transform": "translateX(20px)"
        }
      }
    }
  },
  plugins: [],
}

