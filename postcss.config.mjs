const config = {
  plugins: {
    '@tailwindcss/postcss': {
      darkMode: "class",
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./Components/**/*.{js,ts,jsx,tsx}",
      ],
    },
    autoprefixer: {},
  },
};

export default config;