<script setup lang="ts">
import { useRoute } from 'vue-router'
import { trips } from '~/data/trips'

//FOR LIGHTBOX
import { ref } from 'vue'

const lightbox = ref(false)
const activeImage = ref(0)

const route = useRoute()

const trip = trips.find(t => t.slug === route.params.slug)

if (!trip) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Trip not found'
  })
}

// Safe images fallback
const images = trip.images?.length
  ? trip.images
  : trip.image
    ? [trip.image]
    : []
</script>

<template>
  <div>

    <!-- 🖼️ IMAGE GALLERY HERO -->
    <v-container fluid class="pa-0">
<v-row no-gutters>
  <!-- BIG IMAGE -->
  <v-col cols="12" md="8">
    <v-img
      :src="images[0]"
      height="500"
      cover
      class="cursor-pointer"
      @click="lightbox = true; activeImage = 0"
    />
  </v-col>

  <!-- GRID -->
  <v-col cols="12" md="4">
    <v-row no-gutters>
      <v-col
        v-for="(img, i) in images.slice(1, 5)"
        :key="i"
        cols="6"
      >
        <v-img
          :src="img"
          height="250"
          cover
          class="cursor-pointer"
          @click="lightbox = true; activeImage = i + 1"
        />
      </v-col>
    </v-row>
  </v-col>
</v-row>
    </v-container>

    <!-- 🧭 HEADER -->
    <v-container class="py-6">
      <v-row align="center">
        <v-col cols="12" md="8">
          <h1 class="text-h4 font-weight-bold">
            {{ trip.title }}
          </h1>

          <div class="d-flex align-center mt-2 text-body-2">
            <v-icon size="18" class="mr-1">mdi-star</v-icon>
            <span class="mr-2">4.8</span>
            <span class="mr-2">(124 reviews)</span>
            <span class="mr-2">•</span>
            <span>Truckee River, CA</span>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- 🧱 MAIN CONTENT -->
    <v-container>
      <v-row align="start">

        <!-- LEFT -->
        <v-col cols="12" md="8">

          <!-- QUICK FACTS -->
          <v-card class="pa-5 mb-6" rounded="xl" elevation="1">
            <v-row>
              <v-col cols="6" md="3">
                <v-icon class="mb-1">mdi-clock-outline</v-icon>
                <div class="text-caption">Duration</div>
                <div class="font-weight-medium">{{ trip.duration }}</div>
              </v-col>

              <v-col cols="6" md="3">
                <v-icon class="mb-1">mdi-wave</v-icon>
                <div class="text-caption">Difficulty</div>
                <div class="font-weight-medium">{{ trip.difficulty }}</div>
              </v-col>

              <v-col cols="6" md="3">
                <v-icon class="mb-1">mdi-account-group</v-icon>
                <div class="text-caption">Group Size</div>
                <div class="font-weight-medium">Up to 8</div>
              </v-col>

              <v-col cols="6" md="3">
                <v-icon class="mb-1">mdi-weather-sunny</v-icon>
                <div class="text-caption">Season</div>
                <div class="font-weight-medium">May – Sep</div>
              </v-col>
            </v-row>
          </v-card>

          <!-- DESCRIPTION -->
          <div class="mb-8">
            <h2 class="text-h5 font-weight-bold mb-3">Experience</h2>
            <p class="text-body-1">
              {{ trip.description }}
            </p>
          </div>

          <!-- HIGHLIGHTS -->
          <div class="mb-8">
            <h2 class="text-h5 font-weight-bold mb-3">Highlights</h2>

            <v-row>
              <v-col cols="12" md="6">
                ✔ Expert river guides
              </v-col>
              <v-col cols="12" md="6">
                ✔ Stunning Sierra scenery
              </v-col>
              <v-col cols="12" md="6">
                ✔ Top-rated safety equipment
              </v-col>
              <v-col cols="12" md="6">
                ✔ Perfect mix of thrill & views
              </v-col>
            </v-row>
          </div>

          <!-- INCLUDED -->
          <div class="mb-8">
            <h2 class="text-h5 font-weight-bold mb-3">What's Included</h2>

            <ul>
              <li>Professional guide</li>
              <li>Helmet & life jacket</li>
              <li>Raft & paddles</li>
              <li>Safety briefing</li>
            </ul>
          </div>

          <!-- REVIEWS -->
          <div>
            <h2 class="text-h5 font-weight-bold mb-3">Reviews</h2>

            <v-card class="pa-4 mb-3" rounded="lg" elevation="1">
              <strong>Sarah M.</strong>
              <div class="text-caption mb-1">★★★★★</div>
              <p>Absolutely incredible experience. The guides were amazing.</p>
            </v-card>

            <v-card class="pa-4" rounded="lg" elevation="1">
              <strong>Jason K.</strong>
              <div class="text-caption mb-1">★★★★★</div>
              <p>Perfect mix of adrenaline and scenery. Highly recommend.</p>
            </v-card>
          </div>

        </v-col>

        <!-- RIGHT: BOOKING -->
        <v-col cols="12" md="4">

          <v-card class="pa-6 booking-card" rounded="xl" elevation="3">

            <div class="d-flex justify-space-between align-center mb-4">
              <div class="text-h5 font-weight-bold">
                {{ trip.price }}
              </div>
              <div class="text-caption">per person</div>
            </div>

            <v-divider class="mb-4" />

            <v-btn color="black" size="large" block class="mb-3">
              Reserve now
            </v-btn>

            <v-btn variant="outlined" size="large" block>
              Contact operator
            </v-btn>

            <div class="text-caption mt-4">
              ✔ Free cancellation up to 24h<br />
              ✔ Instant confirmation
            </div>

          </v-card>

        </v-col>

      </v-row>
    </v-container>

  </div>
  <v-dialog v-model="lightbox" fullscreen>
  <v-card class="bg-black">

    <!-- CLOSE BUTTON -->
    <v-btn
      icon
      class="ma-4"
      style="position:absolute; z-index:10;"
      @click="lightbox = false"
    >
      <v-icon color="white">mdi-close</v-icon>
    </v-btn>

    <!-- IMAGE -->
    <v-img
      :src="images[activeImage]"
      height="100vh"
      contain
    />

    <!-- NAV -->
    <v-btn
      icon
      style="position:absolute; left:20px; top:50%"
      @click="activeImage = (activeImage - 1 + images.length) % images.length"
    >
      <v-icon color="white">mdi-chevron-left</v-icon>
    </v-btn>

    <v-btn
      icon
      style="position:absolute; right:20px; top:50%"
      @click="activeImage = (activeImage + 1) % images.length"
    >
      <v-icon color="white">mdi-chevron-right</v-icon>
    </v-btn>

  </v-card>
</v-dialog>
</template>

<style scoped>
.booking-card {
  position: sticky;
  top: 100px;
}
</style>