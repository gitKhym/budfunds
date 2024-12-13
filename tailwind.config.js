/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
        Koulen: ["Koulen", "sans-serif"],
      },
      colors: {
        text: {
          light: "#ffffff",
          dark: "#000000",
        },
        background: "#232227",
        primary: "#FF405D",
        secondary: "#caa7a2",
      },
    },
  },
  plugins: [],
};
