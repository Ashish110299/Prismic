// https://v3.nuxtjs.org/api/configuration/nuxt.config
import smConfig from "./sm.json";
export default defineNuxtConfig({
  target: "static",
  ssr: true,
  prismic: {
    endpoint: "https://practice3299.prismic.io/api/v2",
  },
  app: {
    head: {
      titleTemplate: "%s - practice",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/fav.png",
        },
      ],
    },
  },
  css: [
    "~/assets/scss/style.scss",
    "~/assets/scss/custom.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/sass-loader.scss";',
        },
      },
    },
  },
  generate: {
    fallback: "404.html",
  },
  buildModules: ["@nuxtjs/prismic"],
  experimental: {
    // noScripts: true,
    payloadExtraction: false,
  },
});
