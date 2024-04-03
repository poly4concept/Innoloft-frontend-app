/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--theme-accent)",
        secondary: "#374151",
      },
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
