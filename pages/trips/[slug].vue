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
    <v-container fluid class="hero-section pa-0">
<v-row no-gutters>
  <v-col cols="12" md="8">
  <div class="hero-wrapper">
    <v-img
      :src="trip.image"
      height="520"
      cover
      class="hero-image cursor-pointer"
      gradient="to top, rgba(0,0,0,.75), rgba(0,0,0,.15)"
      @click="lightbox = true; activeImage = 0"
    >
      <div class="hero-content">
        <div class="hero-badge">
          ✈ Luxury Escape
        </div>

        <div class="hero-meta">
  <span>⭐ 4.8</span>
  <span>•</span>
  <span>{{ trip.duration }}</span>
  <span>•</span>
  <span>{{ trip.difficulty }}</span>
</div>

        <div>
          <h1 class="hero-title">
            {{ trip.heroTitle }}
          </h1>

          <p class="hero-description">
            {{ trip.heroDescription }}
          </p>

          <div class="hero-actions">
            <v-btn
              color="white"
              size="large"
              rounded="xl"
              class="text-black font-weight-bold px-6"
            >
              Book Now
            </v-btn>

            <v-btn
              variant="outlined"
              color="white"
              size="large"
              rounded="xl"
              class="px-6"
            >
              View Gallery
            </v-btn>
          </div>
        </div>
      </div>
    </v-img>
  </div>
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
           <v-row class="my-8" density="comfortable">

  <v-col cols="6" md="3">
    <v-card class="pa-4 text-center" rounded="xl">
      <v-icon color="primary">mdi-clock-outline</v-icon>
      <div class="text-caption">Duration</div>
      <div class="font-weight-bold">{{ trip.duration }}</div>
    </v-card>
  </v-col>

  <v-col cols="6" md="3">
    <v-card class="pa-4 text-center" rounded="xl">
      <v-icon color="primary">mdi-signal</v-icon>
      <div class="text-caption">Difficulty</div>
      <div class="font-weight-bold">{{ trip.difficulty }}</div>
    </v-card>
  </v-col>

  <v-col cols="6" md="3">
    <v-card class="pa-4 text-center" rounded="xl">
      <v-icon color="primary">mdi-currency-usd</v-icon>
      <div class="text-caption">Adult</div>
      <div class="font-weight-bold">{{ trip.price }}</div>
    </v-card>
  </v-col>

  <v-col cols="6" md="3">
    <v-card class="pa-4 text-center" rounded="xl">
      <v-icon color="primary">mdi-account-child</v-icon>
      <div class="text-caption">Youth</div>
      <div class="font-weight-bold">{{ trip.priceYouth }}</div>
    </v-card>
  </v-col>

</v-row>
          <!-- DESCRIPTION -->
          <div class="mb-8">
            <h2 class="text-h5 font-weight-bold mb-3">Experience</h2>
            <p class="text-body-1">
              {{ trip.description }}
            </p>
          </div>

          
          <!--TRIP DETAILS BLOCK-->
          <v-container class="my-10">

  <h2 class="text-h5 font-weight-bold mb-6">
    Trip Details
  </h2>

  <v-row>

    <v-col cols="12" md="4">
      <v-card class="pa-4" rounded="xl">
        <v-icon color="primary">mdi-account-group</v-icon>
        <div class="font-weight-bold mt-2">Raft Capacity</div>
        <div class="text-body-2">
          {{ trip.raftSizeCapacity }}
        </div>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card class="pa-4" rounded="xl">
        <v-icon color="primary">mdi-calendar-clock</v-icon>
        <div class="font-weight-bold mt-2">Meet Times</div>
        <div class="text-body-2">
          {{ trip.meetTime }}
        </div>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card class="pa-4" rounded="xl">
        <v-icon color="primary">mdi-timer-outline</v-icon>
        <div class="font-weight-bold mt-2">Trip Duration</div>
        <div class="text-body-2">
          {{ trip.tripTime }}
        </div>
      </v-card>
    </v-col>

  </v-row>

</v-container>

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
          <v-container class="my-10">

  <h2 class="text-h5 font-weight-bold mb-4">
    What’s Included
  </h2>

  <v-list>

    <v-list-item
      v-for="(item, i) in trip.whatsIncluded.filter(i => i)"
      :key="i"
    >
      <template #prepend>
        <v-icon color="primary">mdi-check-circle</v-icon>
      </template>

      <v-list-item-title>
        {{ item }}
      </v-list-item-title>
    </v-list-item>

  </v-list>

</v-container>
<!-- IMAGE GALLERY GRID -->
  <v-col cols="12" md="4">
    <v-row no-gutters>
      <v-col
        v-for="(img, i) in images.slice(1, 5)"
        :key="i"
        cols="6"
      >
        <v-img
  :src="img"
  height="260"
  cover
  class="gallery-thumb cursor-pointer"
  @click="lightbox = true; activeImage = i + 1"
>
  <div
    v-if="i === 3 && images.length > 5"
    class="gallery-overlay"
  >
    +{{ images.length - 5 }} photos
  </div>
</v-img>
      </v-col>
    </v-row>
  </v-col>

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
/* GALLERY UPGRADE GRID */
.gallery-thumb {
  transition: all .35s ease;
}

.gallery-thumb:hover {
  transform: scale(1.03);
  filter: brightness(1.05);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.45);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  backdrop-filter: blur(4px);
}


.booking-card {
  position: sticky;
  top: 100px;
}

/* ADDED THIS FOR THE NEW HERO */
.hero-wrapper {
  position: relative;
  border-radius: 0 0 36px 36px;
  overflow: hidden;
  box-shadow:
    0 25px 60px rgba(0,0,0,0.28);
}

.hero-image {
  transition: transform 0.5s ease;
}

.hero-wrapper:hover .hero-image {
  transform: scale(1.02);
}

.hero-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 48px;
  background:
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.78) 0%,
      rgba(0, 0, 0, 0.35) 45%,
      rgba(0, 0, 0, 0.05) 100%
    );
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 8px 18px;
  margin-bottom: 18px;
  border-radius: 999px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.18);
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.hero-title {
  color: white;
   font-size: clamp(3rem, 6vw, 5.5rem);
  letter-spacing: -2px;
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 16px;
  max-width: 700px;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.45);
}

.hero-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 650px;
  margin-bottom: 28px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 28px;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-section {
  margin-bottom: 60px;
}
}

/*CLEANER PAGE BACKGROUND */
:deep(body) {
  background:
    linear-gradient(
      to bottom,
      #f8fafc 0%,
      #ffffff 20%
    );
}


.v-card {
  transition: all .3s ease;
}

.v-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 12px 30px rgba(0,0,0,.08);
}


.hero-meta {
  display: flex;
  gap: 12px;
  color: rgba(255,255,255,.88);
  margin-bottom: 18px;
  font-weight: 500;
}
</style>