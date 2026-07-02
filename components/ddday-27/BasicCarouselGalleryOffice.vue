
<!-- THESE ARE HARDCODED FOR THE HOME PAGE I THINK -->
<template><v-sheet class="mt-4 overflow-hidden" rounded="xl">
  <v-carousel cycle hide-delimiters>
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

    //OFFICE by the RIver
    {
      src: 'images/finalized-batch/irie (10).webp'
    },
    {
      src: '/images/compressed-irie/after-deployment/irie-river-rafting-riverside-office-second.webp'
    },
    
    
    
    {
      src: 'images/finalized-batch/irie (9).webp'
    },
    {
      src: 'images/finalized-batch/irie (11).webp'
    },
    {
      src: 'images/finalized-batch/irie (2).webp'
    },
    {
      src: 'images/finalized-batch/irie (1).webp'
    },{
      src: '/images/compressed-irie/after-deployment/irie-river-rafting-riverside-office-third.webp'
    },
    // {
    //   src: '/images/compressed-irie/after-deployment/irie-river-rafting-riverside-office-fifth.webp'
    // },
    // {
    //   src: '/images/compressed-irie/after-deployment/irie-river-rafting-riverside-office-sixth.webp'
    // },
    // {
    //   src: '/images/compressed-irie/after-deployment/irie-river-rafting-riverside-office-seventh.webp'
    // },
    
  ]
</script>