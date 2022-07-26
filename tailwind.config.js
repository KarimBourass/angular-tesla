module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["gotham", "sans-serif"],
      },
      keyframes: {
        slidetoToTop: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slidetoToTop: "slidetoToTop 1s",
      },
    },
  },
  plugins: [],
};
