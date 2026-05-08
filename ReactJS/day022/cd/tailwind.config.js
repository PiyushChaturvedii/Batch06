module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        other: { min: "340px", max: "1200px" },
      },
      colors: {
        darkbg: {
          850: "#1E304B",
        },
        blue: {
          850: "#7dd3fc",
        },
      },
    },
  },
  plugins: [],
};
