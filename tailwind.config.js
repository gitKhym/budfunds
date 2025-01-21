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
      dropShadow: {
        light: "0 35px 35px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        square: "0.6rem",
      },
      colors: {
        text: {
          light: "#ffffff",
          dark: "#000000",
        },
        "darken-grey": {
          600: "rgba(30,29,32,0.80)",
        },
        darken: {
          25: "rgba(0,0,0,0.25)",
          50: "rgba(0,0,0,0.5)",
          75: "rgba(0,0,0,0.75)",
        },
        grey: {
          800: "#1E1D20",
          600: "#232227",
          550: "#27262B",
          400: "#333033",
          200: "#8B8B8B",
          100: "#D3D3D3",
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
        tiny: "0.85rem",
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
