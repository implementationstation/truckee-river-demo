<script setup lang="ts">
import { trips } from '~/data/trips'
</script>

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

      <NuxtLink to="/" class="text-decoration-none">

  <v-img
    src="/images/logo/logo.gif"
    alt="I.R.I.E River Rafting"
    max-height="65"
    width="auto"
    contain
    class="mr-3"
  />

  <!-- <span class="font-weight-bold text-body-1 text-black">
    I.R.I.E River Rafting
  </span> -->

</NuxtLink>

<v-spacer />

      <!--
      ========================
      DESKTOP NAVIGATION
      ========================
      -->

      <v-btn to="/" variant="text">
        Home
      </v-btn>

      <!-- <v-btn to="/trips/truckee" variant="text">
        Trips
      </v-btn> -->
      <v-menu offset-y>
  <template #activator="{ props }">
    <v-btn
      v-bind="props"
      variant="text"
    >
      Trips
      <v-icon end>mdi-chevron-down</v-icon>
    </v-btn>
  </template>

  <v-list>

    <!-- <v-list-item
      v-for="trip in trips"
      :key="trip.slug"
      :to="`/trips/${trip.slug}`"
      link
    >
      <v-list-item-title>
        {{ trip.title }}
      </v-list-item-title>
    </v-list-item> -->
    
    <!-- UPGRADED Dropdown now with Images & Duration -->
    <v-list-item
  v-for="trip in trips"
  :key="trip.slug"
  :to="`/trips/${trip.slug}`"
  link
>
  <template #prepend>
    <v-avatar size="40">
      <v-img :src="trip.images?.[0] || trip.image" />
    </v-avatar>
  </template>

  <v-list-item-title>
    {{ trip.title }}
  </v-list-item-title>

  <v-list-item-subtitle>
    {{ trip.duration }}
  </v-list-item-subtitle>
</v-list-item>

  </v-list>
</v-menu>

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
              I.R.I.E River Rafting
            </h3>

            <p>
              Guided rafting adventures near Tahoe.
            </p>

          </v-col>

          <v-col cols="12" md="6">

            <p>
              © 2026 I.R.I.E River Rafting
            </p>

          </v-col>

        </v-row>

      </v-container>

    </v-footer>

  </v-app>

</template>
