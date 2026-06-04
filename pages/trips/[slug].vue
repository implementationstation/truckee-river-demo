<script setup lang="ts">
import { useRoute } from 'vue-router'
import { trips } from '~/data/trips'
import { useSeo } from '~/composables/useSeo'

const route = useRoute()

const trip = trips.find(t => t.slug === route.params.slug)

// SEO (important)
if (trip) {
  useSeo({
    title: `${trip.title} | Truckee River Rafting`,
    description: trip.description,
    image: trip.image,
    url: `/trips/${trip.slug}`
  })
}
</script>

<template>
  <div v-if="trip">

    <!-- HERO -->
    <div
      class="hero d-flex align-end"
      :style="`background-image:url(${trip.image})`"
    >
      <v-container class="pb-10 text-white">

        <div class="max-w-xl">
          <h1 class="text-h3 font-weight-bold mb-3">
            {{ trip.title }}
          </h1>

          <p class="text-body-1 mb-4">
            {{ trip.description }}
          </p>

          <!-- QUICK TAGS -->
          <div class="d-flex flex-wrap ga-2 mb-4">
            <v-chip>{{ trip.duration }}</v-chip>
            <v-chip>{{ trip.difficulty }}</v-chip>
            <v-chip>{{ trip.season }}</v-chip>
          </div>

          <v-btn size="large" color="primary" rounded="xl">
            Book This Trip
          </v-btn>
        </div>

      </v-container>
    </div>

    <!-- MAIN GRID -->
    <v-container class="py-12">
      <v-row>

        <!-- LEFT CONTENT -->
        <v-col cols="12" md="8">

          <!-- OVERVIEW -->
          <section class="mb-10">
            <h2 class="text-h5 font-weight-bold mb-3">
              Overview
            </h2>
            <p class="text-body-1">
              {{ trip.longDescription }}
            </p>
          </section>

          <!-- HIGHLIGHTS -->
          <section class="mb-10">
            <h2 class="text-h5 font-weight-bold mb-4">
              Highlights
            </h2>

            <v-row>
              <v-col
                v-for="(item, i) in trip.highlights"
                :key="i"
                cols="12"
                sm="6"
              >
                <div class="d-flex align-center ga-2">
                  <v-icon color="primary">mdi-check-circle</v-icon>
                  <span>{{ item }}</span>
                </div>
              </v-col>
            </v-row>
          </section>

          <!-- INCLUDED -->
          <section class="mb-10">
            <h2 class="text-h5 font-weight-bold mb-4">
              What’s Included
            </h2>

            <v-row>
              <v-col
                v-for="(item, i) in trip.includes"
                :key="i"
                cols="12"
                sm="6"
              >
                <div class="d-flex align-center ga-2">
                  <v-icon color="green">mdi-check</v-icon>
                  <span>{{ item }}</span>
                </div>
              </v-col>
            </v-row>
          </section>

        </v-col>

        <!-- RIGHT SIDEBAR (BOOKING CARD) -->
        <v-col cols="12" md="4">

          <v-card
            class="pa-6 sticky"
            rounded="xl"
            elevation="3"
          >

            <div class="text-h6 font-weight-bold mb-2">
              {{ trip.price }}
            </div>

            <div class="text-body-2 text-grey mb-4">
              per person
            </div>

            <v-divider class="mb-4" />

            <div class="mb-2 d-flex justify-space-between">
              <span>Duration</span>
              <strong>{{ trip.duration }}</strong>
            </div>

            <div class="mb-2 d-flex justify-space-between">
              <span>Difficulty</span>
              <strong>{{ trip.difficulty }}</strong>
            </div>

            <div class="mb-4 d-flex justify-space-between">
              <span>Season</span>
              <strong>{{ trip.season }}</strong>
            </div>

            <v-btn
              block
              size="large"
              color="primary"
              rounded="xl"
              class="mb-3"
            >
              Book Now
            </v-btn>

            <v-btn
              block
              variant="outlined"
              rounded="xl"
            >
              Ask a Question
            </v-btn>

          </v-card>

        </v-col>

      </v-row>
    </v-container>

    <!-- FINAL CTA -->
    <v-container class="pb-16">
      <v-sheet
        rounded="xl"
        class="pa-10 text-center"
        color="primary"
      >
        <h2 class="text-h5 font-weight-bold text-white mb-4">
          Ready for Your Adventure?
        </h2>

        <v-btn size="large" color="white" rounded="xl">
          Reserve Your Spot
        </v-btn>
      </v-sheet>
    </v-container>

  </div>

  <!-- FALLBACK -->
  <div v-else class="text-center py-16">
    <h2 class="text-h5">Trip not found</h2>
  </div>
</template>

<style scoped>
.hero {
  height: 420px;
  background-size: cover;
  background-position: center;
}

.sticky {
  position: sticky;
  top: 100px;
}
</style>