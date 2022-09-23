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
        discount: "rgba(255, 255, 255, 0.15)",
      },

      height: {
        cropHeader: "calc(90vh - 127.45px)",
        cropHeaderv2: "calc(100vh - 127.45px)",
      },

      backgroundImage: {
        "gradient-radial":
          "linear-gradient(180deg, rgba(0, 28, 75, 0) 0%, rgba(9, 0, 75, 0.9) 100%)",
        experience: " linear-gradient(180deg, #5D43FD 0%, #001C4B 100%)",
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
