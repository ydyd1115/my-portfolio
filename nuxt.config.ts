const { API_KEY, API_URL } = process.env

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-microcms-module"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
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

