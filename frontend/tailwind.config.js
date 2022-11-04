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
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
