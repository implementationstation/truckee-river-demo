<template>

  <v-app>

    <!--
    ========================
    NAVBAR
    ========================
    -->

    <v-app-bar
      elevation="2"
      color="white"
    >

      <v-app-bar-title>
        Truckee River Rafting
      </v-app-bar-title>

      <!--
      ========================
      DESKTOP NAVIGATION
      ========================
      -->

      <v-btn to="/" variant="text">
        Home
      </v-btn>

      <v-btn to="/trips/truckee" variant="text">
        Trips
      </v-btn>

      <!-- <NuxtLink to="/trips/truckee">Trips</NuxtLink> -->

      <v-btn to="/info/faq" variant="text">
        FAQ
      </v-btn>

      <!-- <v-btn to="/about" variant="text">
        About
      </v-btn> -->

      <v-btn to="/contact" variant="text">
        Contact
      </v-btn>

    </v-app-bar>

    <!--
    ========================
    PAGE CONTENT
    ========================
    -->

    <v-main>

      <slot />

    </v-main>

    <!--
    ========================
    FOOTER
    ========================
    -->

    <v-footer
      class="pa-6"
      color="grey-lighten-4"
    >

      <v-container>

        <v-row>

          <v-col cols="12" md="6">

            <h3 class="mb-2">
              Truckee River Rafting
            </h3>

            <p>
              Guided rafting adventures near Tahoe.
            </p>

          </v-col>

          <v-col cols="12" md="6">

            <p>
              © 2026 Truckee River Rafting
            </p>

          </v-col>

        </v-row>

      </v-container>

    </v-footer>

  </v-app>

</template>
