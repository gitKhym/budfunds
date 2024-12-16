/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      sans: ["Lexend"],
    },
    colors: {
      grey: {
        800: "#1E1D20",
        600: "#232227",
        400: "#333033",
        200: "#8B8B8B",
      },
    },
    extend: {
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
        Koulen: ["Koulen", "sans-serif"],
      },
      borderRadius: {
        square: "0.6rem",
      },
      colors: {
        text: {
          light: "#ffffff",
          dark: "#000000",
        },
        primary: "#FF405D",
        secondary: "#caa7a2",
      },
      fontSize: {
        "2xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
