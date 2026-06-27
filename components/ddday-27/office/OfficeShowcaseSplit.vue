<script setup lang="ts">
import type { OfficeSlide } from "@/types/office"

defineProps<{
  slides: OfficeSlide[]
}>()
</script>

<template>
  <section class="py-16">
    <v-container>
      <v-row
        v-for="(slide, index) in slides"
        :key="slide.title"
        align="center"
        class="mb-16"
      >
        <v-col
          cols="12"
          md="6"
          :order="index % 2 ? 2 : 1"
        >
          <v-img
            :src="slide.image"
            height="450"
            cover
            rounded="xl"
          />
        </v-col>

        <v-col
          cols="12"
          md="6"
          :order="index % 2 ? 1 : 2"
        >
          <div class="text-overline text-primary mb-2">
            OUR HEADQUARTERS
          </div>

          <h2 class="text-h3 font-weight-bold mb-4">
            {{ slide.title }}
          </h2>

          <p class="text-body-1 text-medium-emphasis mb-8">
            {{ slide.subtitle }}
          </p>

          <v-list bg-color="transparent">
            <v-list-item
              v-for="feature in slide.features"
              :key="feature.title"
            >
              <template #prepend>
                <v-icon
                  :icon="feature.icon"
                  color="primary"
                />
              </template>

              <v-list-item-title>
                {{ feature.title }}
              </v-list-item-title>

              <v-list-item-subtitle>
                {{ feature.description }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>

          <v-btn
            color="primary"
            size="large"
            rounded
            class="mt-6"
          >
            Book Your Adventure
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<!-- 
 Variation 1 — 
 Luxury Split Layout 
 ⭐⭐⭐⭐⭐

Think Apple / Tesla.

 -------------------------------------------------------
| Large Image             | Small eyebrow              |
|                          |                            |
|                          | HUGE TITLE                 |
|                          |                            |
|                          | Description                |
|                          |                            |
|                          | ✓ Secure Parking           |
|                          | ✓ Restrooms                |
|                          | ✓ Indoor Lounge            |
|                          |                            |
|                          | [Book Now]                |
 -------------------------------------------------------

Looks like:

huge photography
white space
premium typography
rounded card
gradient overlay
chips
fade transitions

Best for:

Premium adventure company. -->