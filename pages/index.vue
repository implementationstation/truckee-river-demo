<template>

  <v-container class="py-16">

    <v-row align="center">

      <!--refactor v1.0
      ========================
      HERO TEXT
      ========================
      -->

      <v-col cols="12" md="6">

        <h1 class="text-h2 font-weight-bold mb-6">
          Adventure Starts On The Truckee River
        </h1>

        <p class="text-h6 mb-6">
          Experience guided rafting adventures near Lake Tahoe
          with experienced local guides.
        </p>

        <v-btn
          color="primary"
          size="x-large"
          to="/contact"
        >
          Book Your Adventure
        </v-btn>

      </v-col>

      <!--
      ========================
      HERO IMAGE
      ========================
      -->

      <v-col cols="12" md="6">

        <v-img
          src="/images/rafting-hero.jpg"
          rounded="xl"
          cover
        />

      </v-col>

    </v-row>

  </v-container>

</template>

<script setup>

/*
========================
SEO SECTION
========================
*/

useSeoMeta({

  title: 'Truckee River Rafting',

  description: 'Guided rafting adventures near Tahoe and the Truckee River.',

  ogTitle: 'Truckee River Rafting',

  ogDescription: 'Adventure rafting in Northern California.'

})

</script>
