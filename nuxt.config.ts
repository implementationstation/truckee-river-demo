export default defineNuxtConfig({

  /*
  ========================
  MODULES
  ========================
  */

  modules: [
    'vuetify-nuxt-module'
  ],

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
