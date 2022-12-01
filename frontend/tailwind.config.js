/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "../artifica/templates/*.html",
    "../artifica/templates/**/*.html",
    "./node_modules/flowbite/**/*.js",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      animation: {
        blob: "blob 9s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(calc(100vw/3), calc(100vh/3)) scale(1.1)",
          },
          "66%": {
            transform: "translate(calc(100vw/6), calc(100vh/-6)) scale(0.9)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
