export default defineNuxtConfig({

  /*
  ========================
  MODULES
  ========================
  */

  modules: ['vuetify-nuxt-module', '@nuxt/image'],

  /*
  ========================
  GLOBAL CSS
  ========================
  */

  css: [
    '@mdi/font/css/materialdesignicons.css'
  ],

  /*
  ========================
  VUETIFY SETTINGS
  ========================
  */

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light'
      }
    }
  }

})