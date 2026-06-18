<script setup lang="ts">
import { useRoute } from 'vue-router'
import { trips } from '~/data/trips'

//FOR LIGHTBOX
import { ref } from 'vue'

const lightbox = ref(false)
const activeImage = ref(0)

const images = [
  '/images/compressed-irie/guided-family-rafting-trip-california.webp',
  '/images/compressed-irie/fun-for-the-family-whitewater-rafting-truckee.webp',
  '/images/compressed-irie/whitewater-rafting-boca-guided-tour.webp',
  '/images/compressed-irie/rafting-adventure-for-groups-truckee.webp',
   
]
</script>

<template><v-container>
<v-row>
    <!-- IMAGE GALLERY GRID -->
  <v-col cols="12">
    <v-row>
      <v-col
        v-for="(img, i) in images"
        :key="i"
        cols="6"
      >
        <v-img
  :src="img"
  height="330"
  cover
  rounded="xl"
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
  <v-dialog v-model="lightbox" fullscreen>
  <v-card class="bg-black">

    <!-- CLOSE BUTTON -->
    <v-btn
      icon
      class="ma-4"
      style="position:absolute; z-index:10;"
      @click="lightbox = false"
    >
      <v-icon color="black">mdi-close</v-icon>
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
      <v-icon color="black">mdi-chevron-left</v-icon>
    </v-btn>

    <v-btn
      icon
      style="position:absolute; right:20px; top:50%"
      @click="activeImage = (activeImage + 1) % images.length"
    >
      <v-icon color="black">mdi-chevron-right</v-icon>
    </v-btn>

  </v-card>
</v-dialog>
</v-row>
</v-container>
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
</style>