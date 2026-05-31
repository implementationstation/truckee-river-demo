<script setup lang="ts">
import type { HeroData } from '../../types/sections'

defineProps<{
  hero: HeroData
}>()
</script>

<template>
  <v-container class="py-16">
    <v-row align="center">
      <v-col cols="12" md="6">
        <h1 class="text-h2 font-weight-bold">
          {{ hero.title }}
        </h1>

        <p class="text-h6 mt-4">
          {{ hero.subtitle }}
        </p>

        <v-btn
          class="mt-6"
          color="primary"
          :to="hero.buttonLink"
        >
          {{ hero.buttonText }}
        </v-btn>
      </v-col>

      <v-col cols="12" md="6">
        <v-img
          :src="hero.image"
          cover
          rounded
        />
      </v-col>
    </v-row>
  </v-container>
</template>