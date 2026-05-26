<script setup lang="ts">
import { ref } from 'vue'
import { trips } from '~/data/trips'

const drawer = ref(false)
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
    <!-- Mobile Burger -->
<v-app-bar-nav-icon
  class="d-md-none"
  @click="drawer = !drawer"
/>
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
<div class="d-none d-md-flex align-center">
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
  link min-width="320"
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

      <v-btn
  color="primary"
  class="ml-4"
  to="https://book.singenuity.com/338/catalog/activities"
>
  Book Now
</v-btn>
      </div>

    </v-app-bar>
    <v-navigation-drawer
  v-model="drawer"
  temporary
  location="left"
>

  <v-list nav>

    <v-list-item
      to="/"
      title="Home"
      prepend-icon="mdi-home"
      @click="drawer = false"
    />

    <!-- Trips Group -->
    <v-list-group value="Trips">

      <template #activator="{ props }">
        <v-list-item
          v-bind="props"
          title="Trips"
          prepend-icon="mdi-kayaking"
        />
      </template>

      <v-list-item
        v-for="trip in trips"
        :key="trip.slug"
        :to="`/trips/${trip.slug}`"
        @click="drawer = false"
      >
        <template #prepend>
          <v-avatar size="36">
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

    </v-list-group>

    <v-list-item
      to="/info/faq"
      title="FAQ"
      prepend-icon="mdi-help-circle"
      @click="drawer = false"
    />

    <v-list-item
      to="/contact"
      title="Contact"
      prepend-icon="mdi-email"
      @click="drawer = false"
    />

  </v-list>

</v-navigation-drawer>

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
  color="grey-lighten-4"
  class="pt-10 pb-6"
>
  <v-container>

    <v-row>

      <!-- Brand -->
      <v-col cols="12" md="4">

        <v-img
          src="/images/logo/logo.gif"
          max-width="180"
          class="mb-4"
        />

        <p class="text-body-2">
          Guided whitewater rafting adventures near Tahoe and Northern California.
        </p>

      </v-col>

      <!-- Quick Links -->
      <v-col cols="12" md="4">

        <h4 class="mb-4">
          Quick Links
        </h4>

        <div class="d-flex flex-column ga-2">

          <NuxtLink to="/">
            Home
          </NuxtLink>

          <NuxtLink to="/info/faq">
            FAQ
          </NuxtLink>

          <NuxtLink to="/contact">
            Contact
          </NuxtLink>

        </div>

      </v-col>

      <!-- Contact -->
      <v-col cols="12" md="4">

        <h4 class="mb-4">
          Contact
        </h4>

        <div class="d-flex flex-column ga-2 text-body-2">

          <div>
            📍 175 River Rd, Tahoe City, CA 96145
          </div>

          <div>
            <v-icon color="primary">mdi-phone</v-icon>
<a href="tel:15305831111">(530) 583-1111</a> 
                <br/> <v-icon color="primary">mdi-phone</v-icon><a href="tel:15305824900">(530) 582-4900</a>
          </div>

          <div>
            ✉️ info@raftirie.com
          </div>

        </div>

        <div class="d-flex ga-3 mt-4">

  <v-btn icon="mdi-instagram" variant="text" to="http://instagram.com/raftirie"/>

  <v-btn icon="mdi-facebook" variant="text" />

  <!-- <v-btn icon="mdi-yelp" variant="text" to="http://www.yelp.com/biz/irie-rafting-company-truckee"></v-btn> -->

  <v-btn icon="mdi-youtube" variant="text" to="http://www.youtube.com/channel/UC72y5dGdF-fBalazy2qvZaw"/>

</div>

      </v-col>

    </v-row>

    <v-divider class="my-6" />

    <div class="text-center text-body-2">
      © 2026 I.R.I.E River Rafting — All Rights Reserved
    </div>

  </v-container>
</v-footer>
  </v-app>

</template>
