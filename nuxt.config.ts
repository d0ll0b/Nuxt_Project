// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "Nuxt_Project",
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
