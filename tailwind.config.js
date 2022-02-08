module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "4rem",
    },
    colors: {
      purple: "#3F3D56",
      grey: "#464346",
      white: "#ffffff",
      lightGrey: "#5D5D5D",
    },
    backgroundImage: {
      "hero-pattern": "url('../src/images/bg.png')",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
