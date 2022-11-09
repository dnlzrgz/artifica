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
      animation: {
        blob: "blob 9s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
