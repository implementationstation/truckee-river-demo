<template>

  <v-main>

    <!--
    ========================
    HERO SECTION
    ========================
    -->

    <v-container class="py-10">

      <v-row align="center">

        <v-col cols="12" md="6">

          <h1 class="text-h2 font-weight-bold mb-4">
            Truckee River Rafting
          </h1>

          <p class="text-h6 mb-6">
            Guided rafting adventures in Northern California near Lake Tahoe.
          </p>

          <v-btn
            size="large"
            color="primary"
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
            elevation="4"
          />

        </v-col>

      </v-row>

    </v-container>

  </v-main>
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

  ogDescription: 'Adventure rafting in Northern California.',

})

</script>
