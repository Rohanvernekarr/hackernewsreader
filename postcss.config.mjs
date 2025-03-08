const config = {
 
  tailwindcss: {
    darkMode: "class", // Ensure dark mode is controlled by the `dark` class
      content: [
        "./app//*.{js,ts,jsx,tsx}",
        "./Components//*.{js,ts,jsx,tsx}",
],
},
autoprefixer: {},
};

export default config;
