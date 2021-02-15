module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        placeholder: "url('../placeholder.png')",
      }),
    },
  },
  variants: {
    extend: { backgroundImage: ["hover", "focus"] },
  },
  plugins: [],
};
