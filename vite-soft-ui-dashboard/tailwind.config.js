/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      sm: { min: "375px", max: "599px" },
      md: { min: "600px", max: "1280px" },
      lg: { min: "1281px" },
    },
  },
};
