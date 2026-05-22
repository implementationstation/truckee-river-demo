<script setup lang="ts">
//import { useSeo } from '@/utils/seo'
import {useSeo} from '../../composables/useSeo'

useSeo({
  title: 'Truckee River Rafting | Half Day Guided Trip',
  description: 'Guided whitewater rafting on the Truckee River. Class II–III rapids near Lake Tahoe. Perfect for families and first-timers.',
  image: '/images/truckee-hero.jpg'
})
</script>

<template>
  <SectionContainer>

    <!-- HERO -->
    <h1>Truckee River Half-Day Rafting</h1>

    <p class="text-subtitle-1">
      Class II–III • 3–4 Hours • Ages 5+
    </p>

    <!-- IMAGE -->
    <NuxtImg src="/images/truckee.jpg" width="1200" />

    <!-- DESCRIPTION -->
    <p class="mt-6">
      Experience the Truckee River through scenic canyons, rolling rapids,
      and crystal-clear Sierra waters. This guided half-day trip is perfect
      for first-timers and families.
    </p>

    <!-- DETAILS -->
    <ul class="mt-6">
      <li>Duration: 3–4 hours</li>
      <li>Difficulty: Class II–III</li>
      <li>Minimum age: 5</li>
      <li>Season: May–September</li>
    </ul>

    <!-- CTA -->
    <v-btn color="primary" size="large" class="mt-6">
      Book This Trip
    </v-btn>

  </SectionContainer>
</template>