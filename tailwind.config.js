module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        placeholder: "url('../placeholder.png')",
      }),
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        header:
          "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
      },
      textShadow: {
        title:
          "0px 0px 4px rgba(0, 0, 0, 0.21), 0px 0px 4px rgba(0, 0, 0, 0.17)",
      },
    },
  },
  variants: {
    extend: { backgroundImage: ["hover", "focus"] },
  },
  plugins: [require("tailwindcss-textshadow")],
};
