/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "../templates/*.html",
    "../templates/**/*.html",
    "./node_modules/flowbite/**/*.js",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      zIndex: {
        1: 1,
      },
      animation: {
        gradient: "gradient 9s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": {
            backgroundPosition: "100% 0",
          },
          "50%": {
            backgroundPosition: "0% 0",
          },
          "100%": {
            backgroundPosition: "100% 0",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
