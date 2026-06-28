export default defineNuxtConfig({
  routeRules: {
    '/lake-tahoe-attractions-activities-lodging': {
      redirect: { to: '/', statusCode: 301 },
    },

    '/truckee-river-rafting-family-rafting-trips-near-truckee-north-lake-tahoe': {
      redirect: { to: '/', statusCode: 301 },
    },

    '/pricing-cancellations-refunds-gratuities': {
      redirect: { to: '/', statusCode: 301 },
    },

    '/northern-california-whitewater-rafting-trips': {
      redirect: { to: '/', statusCode: 301 },
    },

    '/lake-tahoe-rafting-tours-truckee-river': {
      redirect: { to: '/', statusCode: 301 },
    },
    '/reservation-information': {
      redirect: { to: '/', statusCode: 301 },
    },
  },

  app: {
    head: {
      title: 'Truckee Tahoe Guided Whitewater Rapid Rafting Trips',
      meta: [
        {
          name: 'description',
          content:
            'Experience the most popular rafting section near Tahoe on a guided half-day adventure through fun Class II-III rapids, calm scenic stretches, and beautiful Sierra mountain views.',
        },
      ],
    },
  },

  modules: ['vuetify-nuxt-module', '@nuxt/image'],

  css: ['@mdi/font/css/materialdesignicons.css'],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
      },
    },
  },
})