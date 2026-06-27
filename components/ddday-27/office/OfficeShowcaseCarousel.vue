<script setup lang="ts">
import { ref } from "vue"
import type { OfficeSlide } from "@/types/office"

// defineProps<{
//   slides: OfficeSlide[]
// }>()
// const props = defineProps<{
//   slides: OfficeSlide[]
// }>()
const { slides } = defineProps<{
  slides: OfficeSlide[]
}>()

const current = ref(0)
</script>

<template>
  <section class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-list nav rounded="lg">
            <v-list-item
              v-for="(item, i) in slides"
              :key="item.title"
              :active="current === i"
              @click="current = i"
            >
              <template #prepend>
                <!-- THIS IS A PROBLEM ADDED THE OPTIONAL INDICATOR TO THE FIRST FEATURE, 
                BUT IT DOESN'T SHOW UP. I THINK IT'S 
                BECAUSE 
                THE FIRST FEATURE ISN'T A V-LIST-ITEM, BUT A V-LIST-ITEM-GROUP. 
                I NEED TO FIGURE OUT HOW TO GET THE INDICATOR TO SHOW UP ON THE FIRST FEATURE. -->
                <v-icon :icon="item.features.at(0)?.icon" />
              </template>

              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="8">
          <v-window v-model="current">
            <v-window-item
              v-for="(item, i) in slides"
              :key="i"
            >
              <v-card rounded="xl">
                <v-img
                  :src="item.image"
                  height="420"
                  cover
                />

                <v-card-text class="pa-8">
                  <h2 class="text-h4 mb-4">
                    {{ item.title }}
                  </h2>

                  <p class="mb-8">
                    {{ item.subtitle }}
                  </p>

                  <v-row>
                    <v-col
                      v-for="feature in item.features"
                      :key="feature.title"
                      cols="12"
                      md="4"
                    >
                      <v-card
                        flat
                        class="pa-4 text-center"
                      >
                        <v-icon
                          size="42"
                          color="primary"
                          :icon="feature.icon"
                        />

                        <div class="font-weight-bold mt-4">
                          {{ feature.title }}
                        </div>

                        <div class="text-body-2">
                          {{ feature.description }}
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<!-- 
 Variation 2 — 
 Interactive Feature Carousel 
 ⭐⭐⭐⭐⭐

A much more modern experience.

 --------------------------
| IMAGE                    |
|                          |
|--------------------------|
| ● Parking                |
| ● Lounge                 |
| ● Check In               |
| ● Restrooms              |
 --------------------------

Clicking a feature updates:

Image
Headline
Description

using

v-window

Instead of slides...

The left navigation becomes:

🚗 Secure Parking

☕

Comfortable Lounge

👥

Meeting Point

📍

Easy Arrival

Selecting one changes everything else.

Feels like a SaaS landing page. -->