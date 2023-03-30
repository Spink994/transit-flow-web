/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        Krub: ["Krub", "sans-serif"],
        League: ["League Spartan", "sans-serif"],
      },
      colors: {
        primary: {
          1: "#FFBE34",
          2: "#091242",
          3: "#1F2A69",
        },

        secondary: {
          1: "#F4F4F4",
          2: "#1C1F35",
          3: "#666C89",
        },
      },

      backgroundImage: {
        "gradient-1":
          "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 50.75%, #FFD7A6 102.71%)",
        "gradient-2":
          "linear-gradient(360deg, #091242 -11.11%, rgba(9, 18, 66, 0) 90.28%)",
        "hero-bg": 'url("./assets/images/cargo-ship.jpg")',
        "logistics-bg": 'url("./assets/images/cargos.jpg")',
      },

      lineHeight: {
        default: "151.52%",
        heading_1: "41px",
        heading_2: "30px",
      },

      fontWeight: {
        1: "100",
        2: "200",
        3: "300",
        4: "400",
        5: "500",
        6: "600",
        7: "700",
      },
    },
  },
  plugins: [],
};
