const { API_KEY, API_URL } = process.env

export default defineNuxtConfig({
  build: {
    outputDir: '/opt/build/repo/dist',
  },
  devtools: { enabled: true },
  modules: ["nuxt-microcms-module"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || 'yoshi1115',
    apiKey: process.env.MICROCMS_API_KEY || 'defaultCqqddt0SVvs7tRqWJN34bAmcswhjd3IzPKiFApiKey',
  },
  head: {
    title: "My Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" }, // これを追記する
    ],
  },
})

