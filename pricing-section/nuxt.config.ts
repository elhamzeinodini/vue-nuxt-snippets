export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/_index.scss";',
        },
      },
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
});
