/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        loretta: ["loretta", "serif"],
        cardo: ["Cardo", "serif"],
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      colors: {
        primary: {
          DEFAULT: "#a2bd95",
          dark: "#484538",
        },
        secondary: {
          DEFAULT: "#E3DBD3", // tortora
        },
        accent: {
          DEFAULT: "#EBBAB9", // rosa
          dark: "#9D7982",
        },
        black: {
          DEFAULT: "#474747",
        },
      },
    },
  },
  plugins: [
    // Make a plugin for the text-shadow utility
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "0 1px 2px var(--tw-shadow-color)",
        },
        ".text-shadow": {
          textShadow: "0 2px 4px var(--tw-shadow-color)",
        },
        ".text-shadow-lg": {
          textShadow: "0 8px 16px var(--tw-shadow-color)",
        },
      };

      addUtilities(newUtilities, {
        variants: ["responsive", "hover"],
      });
    },
  ],
};
