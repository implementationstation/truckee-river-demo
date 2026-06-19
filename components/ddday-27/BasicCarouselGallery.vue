
<!-- THESE ARE HARDCODED FOR THE HOME PAGE I THINK -->
<template><v-sheet class="overflow-hidden my-3" rounded="xl">
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel></v-sheet>
</template>
<script setup>
  const items = [
    {
      src: '/images/compressed-irie/guided-family-rafting-adventure.webp',
    },
    {
      src: '/images/compressed-irie/guided-whitewater-experience-near-lake-tahoe.webp',
    },
    {
      src: '/images/compressed-irie/experienced-rafting-guides-truckee-river.webp',
    },
    {
      src: '/images/compressed-irie/befunky_2026-4-5_5-52-11.webp',
    },
    {
      src: '/images/compressed-irie/whitewater-experience-near-lake-tahoe.webp',
    },
    {
      src: '/images/compressed-irie/guided-family-rafting-trip-california.webp',
    },
    {
      src: '/images/compressed-irie/fun-for-the-family-whitewater-rafting-truckee.webp',
    },
  ]
</script>