// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    documentDriven: true
  },
  css: [
    '@/assets/styles/reset.scss',
    '@/assets/styles/fonts.scss',
    '@/assets/styles/default.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/vars.scss";'
        },
      },
    },
  }
})
