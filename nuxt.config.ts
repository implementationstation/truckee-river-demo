export default defineNuxtConfig({

  /*
  ========================
  GLOBAL DEFAULTS
  ========================
  */
 app: {
    head: {
      title: 'Truckee Tahoe Guided Whitewater Rapid Rafting Trips',
      meta: [
        { 
          name: 'description', 
          content: 'Experience the most popular rafting section near Tahoe on a guided half-day adventure through fun Class II-III rapids, calm scenic stretches, and beautiful Sierra mountain views.' }
      ]
    }
  },

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