<script setup lang="ts">
import { trips } from '@/data/trips'
import { useSeo } from '../../composables/useSeo'

const route = useRoute()

const trip = trips.find(t => t.slug === route.params.slug)

if (!trip) {
  throw createError({ statusCode: 404, statusMessage: 'Trip not found' })
}

// 🔥 SEO injection
useSeo({
  title: trip.title,
  description: trip.description,
  image: trip.image,
  url: `https://yourdomain.com/trips/${trip.slug}`
})
</script>

<template>
  <div>
    <h1>{{ trip.title }}</h1>
    <p>{{ trip.description }}</p>

    <!-- Add booking CTA here -->
    <button>Book Now</button>
  </div>
</template>