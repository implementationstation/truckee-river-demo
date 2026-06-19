<script setup lang="ts">
import { heroCarouselImages } from '~/data/ddday-27/images'
</script>

<template>
  <v-carousel
    height="700"
    hide-delimiters
    cycle
  >
    <v-carousel-item
      v-for="image in heroCarouselImages"
      :key="image.src"
    >
      <v-img
        :src="image.src"
        :alt="image.alt"
        cover
        height="100%"
      >
        <div class="hero-overlay">
          <div class="hero-content">
            <h1>Truckee River Rafting Adventures</h1>
            <p>
              Guided rafting trips for families, friends,
              and first-time adventurers.
            </p>

            <v-btn
              color="primary"
              size="large"
            >
              Reserve Your Raft
            </v-btn>
          </div>
        </div>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.hero-overlay {
  height: 100%;
  display: flex;
  align-items: center;
  background: rgba(0,0,0,.35);
}

.hero-content {
  max-width: 650px;
  padding: 4rem;
  color: white;
}
</style>