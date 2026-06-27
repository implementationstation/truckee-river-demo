<script setup lang="ts">
import type { OfficeSlide } from "@/types/office"

defineProps<{
  slides: OfficeSlide[]
}>()
</script>

<template>
  <section class="py-16">
    <v-container>
      <div
        v-for="slide in slides"
        :key="slide.title"
        class="mb-16"
      >
        <v-img
          :src="slide.image"
          height="420"
          cover
          rounded="xl"
          class="mb-8"
        />

        <h2 class="text-h3 font-weight-bold mb-4">
          {{ slide.title }}
        </h2>

        <p class="text-body-1 text-medium-emphasis mb-8">
          {{ slide.subtitle }}
        </p>

        <v-row>
          <v-col
            v-for="feature in slide.features"
            :key="feature.title"
            cols="12"
            sm="6"
            md="4"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                rounded="xl"
                class="feature-card"
                :elevation="isHovering ? 10 : 2"
              >
                <v-card-text class="text-center pa-8">
                  <v-icon
                    size="48"
                    color="primary"
                    :icon="feature.icon"
                  />

                  <div class="text-h6 mt-4">
                    {{ feature.title }}
                  </div>

                  <p class="mt-3 text-body-2 text-medium-emphasis">
                    {{ feature.description }}
                  </p>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.feature-card {
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
}
</style>

<!-- 
 Variation 3 — 
 Bento Grid 
 ⭐⭐⭐⭐⭐

Very trendy in 2025/2026.

 ---------------------------------------------------
|          LARGE PHOTO                             |
|--------------------------------------------------|
| Parking | Lounge | Office | Restrooms           |
|--------------------------------------------------|
| Large Description Card                           |
 ---------------------------------------------------

Each tile:

🚗

Secure Parking

Private off-street parking

Hover:

scales
lifts
changes color
icon animates

Looks similar to:

Stripe
Linear
Vercel
Notion AI

No carousel.

Everything visible immediately. -->