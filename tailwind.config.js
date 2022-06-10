module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        regular: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      colors: {
        grayTransperant: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
