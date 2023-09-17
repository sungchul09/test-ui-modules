// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ['assets/styles/reset.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "assets/styles/color.scss";
          @import "assets/styles/font.scss";
          @import "assets/styles/variable.scss";
          `,
        },
      },
    },
  },
  alias: {
    '@': './*',
  },
});
