module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "4rem",
    },
    colors: {
      purple: "#3F3D56",
      lp: "#5d5b7a",
      grey: "#464346",
      white: "#ffffff",
      lightGrey: "#5D5D5D",
      black: "#000",
      mc: "#3F3D56",
      nc: "#E5E5E5",
      nb: "#5D5D5D",
      bb: "#2F2E41",
      mcm: "#464346",
      ce: "#EEEEEE",
      fb: "url('assets/bg.png')",
    },
    backgroundImage: {
      "hero-pattern": "url('../src/images/bg.png')",
    },
    fontFamily: {
      Roboto: ["Roboto"],
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
