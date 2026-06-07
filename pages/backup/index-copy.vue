<script setup lang="ts">
import { trips } from '~/data/trips'
import HeroSection from '~/components/shared/HeroSection.vue';
import SectionBlock from '~/components/shared/SectionBlock.vue';
import TripCard from '~/components/trip/TripCard.vue';
</script>

<template>

  <!-- HERO -->
  <HeroSection
    title="Truckee River Rafting Adventures"
    subtitle="Scenic, fun, and unforgettable trips for families and thrill-seekers"
    image="/images/processed/half-day-guided-river-rafting-experience.webp"
  />

  <!-- TRUST BAR -->
  <SectionBlock>
    <v-row class="text-center">
      <v-col cols="6" md="3">
        <div class="text-h5 font-weight-bold">10,000+</div>
        <div class="text-body-2">Happy Rafters</div>
      </v-col>

      <v-col cols="6" md="3">
        <div class="text-h5 font-weight-bold">4.9★</div>
        <div class="text-body-2">Average Rating</div>
      </v-col>

      <v-col cols="6" md="3">
        <div class="text-h5 font-weight-bold">15+</div>
        <div class="text-body-2">Years Experience</div>
      </v-col>

      <v-col cols="6" md="3">
        <div class="text-h5 font-weight-bold">100%</div>
        <div class="text-body-2">Fun Guaranteed</div>
      </v-col>
    </v-row>
  </SectionBlock>

  <!-- TRIPS -->
   <!--NAAAAH FUCK THIS ONE HEY-->
  <SectionBlock
    title="Choose Your Adventure"
    subtitle="From relaxing floats to exciting rapids"
  >
    <v-row>
      <v-col
        v-for="trip in trips"
        :key="trip.slug"
        cols="12"
        md="4"
      >
         <TripCard v-bind="trip" />
       </v-col>
    </v-row>
  </SectionBlock> 

  <!-- WHY CHOOSE US -->
  <SectionBlock
    title="Why Choose Us"
    subtitle="We make rafting easy, safe, and unforgettable"
  >
    <v-row>
      <v-col cols="12" md="4">
        <div class="text-h6 font-weight-bold mb-2">Expert Guides</div>
        <div class="text-body-2">
          Our experienced team ensures a safe and fun adventure.
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <div class="text-h6 font-weight-bold mb-2">All Skill Levels</div>
        <div class="text-body-2">
          Perfect for beginners, families, and experienced rafters.
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <div class="text-h6 font-weight-bold mb-2">Stunning Scenery</div>
        <div class="text-body-2">
          Enjoy breathtaking views along the Truckee River.
        </div>
      </v-col>
    </v-row>
  </SectionBlock>

  <!-- CTA -->
  <SectionBlock>
    <v-sheet
      rounded="xl"
      class="pa-8 text-center"
      color="primary"
    >
      <div class="text-h5 font-weight-bold mb-4 text-white">
        Ready for Your Adventure?
      </div>

      <v-btn size="large" color="white" rounded="xl">
        Book Your Trip Now
      </v-btn>
    </v-sheet>
  </SectionBlock>

</template>

