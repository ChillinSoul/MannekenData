// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  vue:{
    config: {
      silent: true,
    },
  },
  nitro: {
    devServer: {
      port: 3000,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/fonts', '@pinia/nuxt', '@nuxt/ui', '@nuxt/icon'],

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  compatibilityDate: '2024-09-27'
})