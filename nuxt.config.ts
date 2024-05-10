import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },

  // css: ['~/assets/css/main.css', '../purity-styles/assets/test.css'],
  css: ['../purity-styles/assets/css/main.css'],

  extends: ['../purity-components', '../purity-styles'],

  vite: {
    plugins: [tailwindcss()]

  },

  vue: {
    propsDestructure: true
  },

  modules: ['@nuxtjs/prismic'],

  prismic: {
    endpoint: 'pixelpurity-clean',
  },
})