
<!-- THESE ARE HARDCODED FOR THE HOME PAGE I THINK -->
<template><v-sheet class="overflow-hidden" rounded="xl">
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
      src: '/images/compressed-irie/after-deployment/truckee-river-guided-whitewater-first.webp',
    },
   
    {
      src: 'images/finalized-batch/irie (8).webp'
    },
    {
      src: 'images/finalized-batch/irie (7).webp'
    },
    {
      src: 'images/finalized-batch/irie (6).webp'
    },
    {
      src: 'images/finalized-batch/irie (5).webp'
    },
    {
      src: 'images/finalized-batch/irie (4).webp'
    },
    {
      src: 'images/finalized-batch/irie (3).webp'
    },
    {
      src: 'images/finalized-batch/irie (2).webp'
    },
    {
      src: 'images/finalized-batch/irie (1).webp'
    },
    //OFFICE by the RIver
    {
      src: '/images/compressed-irie/after-deployment/irie-river-rafting-riverside-office-second.webp'
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
    {
      src: '/images/compressed-irie/after-deployment/rafting-through-sierra-river-rapids.webp'
    }, 
  
    {
      src: '/images/compressed-irie/experienced-rafting-guides-truckee-river.webp',
    },
    
    {
      src: '/images/compressed-irie/guided-family-rafting-adventure.webp',
    },
    {
      src: '/images/compressed-irie/guided-whitewater-experience-near-lake-tahoe.webp',
    },
    
  ]
</script>