<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Trips', to: '/trips/half-day' },
  { label: 'About', to: '/about'},
  { label: 'Planning', to: '/trip-planning' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' }
]
</script>

<template>
  <v-app-bar
    elevation="1"
    color="white"
    height="72"
  >
    <v-container class="d-flex align-center justify-space-between">

      <!-- LOGO -->
      <NuxtLink to="/" class="text-h6 font-weight-bold text-black">
        Truckee River Rafting
      </NuxtLink>

      <!-- NAV -->
      <div class="d-none d-md-flex ga-6">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-body-1 text-black"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- CTA -->
      <v-btn color="primary" rounded="xl">
        Book Now
      </v-btn>

    </v-container>
  </v-app-bar>
</template>