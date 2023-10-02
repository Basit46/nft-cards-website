/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarBg: "rgb(229, 227, 219)",
        orange: "#f54a14",
        grey: "#272727",
      },
      screens: {
        vsm: "400px",
        xmd: "900px",
      },
      fontFamily: {
        RobotoMono: ["Roboto Mono", "sans-serif"],
        Anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
