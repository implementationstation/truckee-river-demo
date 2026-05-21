<template>

   <!--
   ========================
   TRIP CARD
   ========================
   -->

   <v-card rounded="xl" elevation="2">

      <v-img
         :src="image"
         height="240"
         cover
         :alt="title"
      />

      <v-card-title>
         {{ title }}
      </v-card-title>

      <v-card-text>
         {{ description }}
      </v-card-text>

      <v-card-actions>

         <v-btn
            color="primary"
            :to="link"
         >
            Learn More
         </v-btn>

      </v-card-actions>

   </v-card>

</template>

<script setup>

/*
========================
COMPONENT PROPS
========================
*/

const props = defineProps({

   title: String,
   description: String,
   image: String,
   link: String

})

</script>
