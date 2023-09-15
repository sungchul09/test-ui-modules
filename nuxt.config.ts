// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/styles/reset.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/styles/color.scss";
          @import "@/assets/styles/font.scss";
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
