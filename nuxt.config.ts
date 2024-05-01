import tailwindcss from '@tailwindcss/vite'
import * as path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]

  },
  modules: ['nuxt-icon', '@vueuse/nuxt', "@nuxt/fonts", "nuxt-primevue"],
  primevue: {
    // cssLayerOrder: 'base, components, primevue, utilities',
    options: {
      unstyled: true,      
    },
    importPT: { as: 'Lara', from: path.resolve(__dirname, './prime-vue/presets/lara') },
  },
  plugins: [
    '~/plugins/css-custom-properties.client.js'
  ]
  // postcss: {
  //   plugins: {
  //     'postcss-custom-media': {}
  //   }
  // },
})



// export default {
//     plugins: [postcss(), postcssCustomMedia]
// }
