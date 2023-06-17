export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/style.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/_index.scss";',
        },
      },
    },
  },
  modules: ["@pinia/nuxt"],
});
