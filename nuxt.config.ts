// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-server-utils", "@sidebase/nuxt-auth"],
  nuxtServerUtils: {
    enableDevTools: true,
    mongodbUri: process.env.MONGODB_URI,
  },
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: "authjs",
    },
  },
});