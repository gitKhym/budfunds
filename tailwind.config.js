/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      sans: ["Lexend"],
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
        grey: {
          800: "#1E1D20",
          600: "#232227",
          400: "#333033",
          200: "#8B8B8B",
        },
        primary: "#FF405D",
        "bf-green": "#63D685",
        "bf-red": "#FF405D",

        pink: {
          500: "#E45593",
        },
        secondary: "#caa7a2",
      },
      fontSize: {
        sm: "1rem",
        "sm-half": "1.25rem",
        lg: "1.5rem",
        xl: "1.75rem",
        "2xl": "2.5rem",
        "2.5xl": "3.5rem",
      },
    },
  },
  plugins: [],
};
