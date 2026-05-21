<template>

  <!--
  ========================
  HERO SECTION
  ========================
  -->

  <v-container class="py-16">

    <v-row align="center">

      <!--
      ========================
      LEFT SIDE CONTENT
      ========================
      -->

      <v-col cols="12" md="6">

        <h1 class="text-h2 font-weight-bold mb-6">
          Adventure Starts On The Truckee River
        </h1>

        <p class="text-h6 mb-6">
          Guided rafting experiences near Tahoe with experienced local guides.
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
          alt="Truckee River rafting near Tahoe"
        />

      </v-col>

    </v-row>

  </v-container>

</template>
