// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { typeCheck: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles" as *;'
        }
      }
    }
  },
  css: ['~/assets/main.scss'],
  modules: ["@nuxt/eslint", "nuxt-svgo", "@nuxt/image"],
  image: {
    dir: 'public/images',
},
});

