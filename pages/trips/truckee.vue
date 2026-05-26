<script setup lang="ts">
import { useSeo } from '../../composables/useSeo'

useSeo({
  title: 'Truckee River Rafting | Half Day Trip',
  description: 'Guided rafting on the Truckee River near Lake Tahoe. Class II–III rapids, perfect for families.',
  image: '/images/family-trip.webp'
})
</script>

<template>
  <v-container>

    <h1 class="text-h4 font-weight-bold">
      Truckee River Half-Day Rafting
    </h1>

    <p class="text-subtitle-1 mt-2">
      Class II–III • 3–4 Hours • Ages 5+
    </p>

    <NuxtImg
      src="/images/l-family-river-rafting-experiences-on-truckee-river.webp"
      class="mt-6"
    />

    <p class="mt-6">
      Navigate fun Class II–III rapids through the scenic Truckee River corridor.
      This half-day guided trip is ideal for beginners, families, and anyone
      looking for a classic Sierra adventure.
    </p>

    <ul class="mt-4">
      <li>Duration: 3–4 hours</li>
      <li>Difficulty: Class II–III</li>
      <li>Minimum age: 5</li>
      <li>Season: May–September</li>
    </ul>

    <v-btn 
      color="primary" 
      size="large" 
      class="mt-6"
      to="/contact"
      >
      Book This Trip
    </v-btn>

  </v-container>
</template>