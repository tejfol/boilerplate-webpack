module.exports = {
  content: ["./public/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#001C4B",
        "light-blue": "#7161FD",
        gold: "#D1A123",
        footer: "#f7f7f7",
        "secondary-blue": "#7161FD",
      },

      height: {
        cropHeader: "calc(90vh - 127.45px)",
      },

      backgroundImage: {
        "gradient-radial":
          "linear-gradient(180deg, rgba(0, 28, 75, 0) 0%, rgba(9, 0, 75, 0.9) 100%)",
      },
    },

    fontFamily: {
      body: ['"Montserrat"', '"sans-serif"'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
