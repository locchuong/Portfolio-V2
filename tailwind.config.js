/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28e98c",
        backdrop: "#1f1f1f",
      },
      aspectRatio: {
        project: 120 / 70,
      },
    },
  },
  plugins: [],
};
