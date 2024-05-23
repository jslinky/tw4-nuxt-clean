import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },

  // css: ['~/assets/css/main.css', '../purity-styles/assets/test.css'],
  css: ['../purity-styles/assets/css/main.css', '~/assets/scss/site/cb-management/main.scss'],

  extends: ['../purity-components', '../purity-styles'],

  vite: {
    plugins: [tailwindcss()]

  },

  vue: {
    propsDestructure: true
  },

  modules: ['@nuxtjs/prismic', '@vueuse/nuxt', '@vueuse/motion/nuxt'],

  prismic: {
    endpoint: 'pixelpurity-clean',
  },
})