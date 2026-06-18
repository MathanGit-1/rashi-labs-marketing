/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D2B5A",
        "ink-soft": "#173F75",
        teal: "#36A9B5",
        "teal-dark": "#177B88",
        orange: "#F28A1A",
        canvas: "#F7FAFA",
        mist: "#EAF5F5",
        line: "#D8E6E8"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        matte: "0 18px 50px rgba(13, 43, 90, 0.09)",
        card: "0 12px 30px rgba(13, 43, 90, 0.08)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};
