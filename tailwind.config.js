/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-blue": "#003285",
      blue: "#2A629A",
      orange: "#FF7F3E",
      yellow: "#FFDA78",
      transparent: "transparent",
      white: "#F5F9FF",
    },
  },
  plugins: [],
};
