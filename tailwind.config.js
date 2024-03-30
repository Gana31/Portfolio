/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030712",
        secondary: "#111827",
        white: "#E5E7EB",
        dimWhite: "#d1d5db",
        dimGrey: "#374151",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "320px",
        ss: "425px",
        sm: "768px",
        md: "1020px",
        lg: "1140px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
