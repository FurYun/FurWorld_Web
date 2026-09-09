// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/wiki/**': { prerender: true },
    '/guide/**': { prerender: true },
    '/news/**': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    },
    markdown: {
      anchorLinks: true,
      toc: { depth: 3, searchDepth: 3 }
    }
  }
})
