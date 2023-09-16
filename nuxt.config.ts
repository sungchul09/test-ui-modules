// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['public/styles/reset.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "public/styles/color.scss";
          @import "public/styles/font.scss";
          @import "public/styles/variable.scss";
          `,
        },
      },
    },
  },
  alias: {
    '@/*': './*',
    '~/*': './*',
  },
});
