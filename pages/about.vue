<template>

  <v-main>

    <v-container class="py-10">

      <h1 class="text-h3 mb-6">
        About IRIE
      </h1>
      <hr>
      
      <general-important-admin-info />

    </v-container>

    <guide-school-section/>

  </v-main>
</template>

<script setup>
import GuideSchoolSection from '~/components/GuideSchoolSection.vue';


useSeoMeta({

  title: 'About Us | Truckee River Rafting',

  description: 'Learn about our rafting guides and Tahoe adventures.'

})

</script>
