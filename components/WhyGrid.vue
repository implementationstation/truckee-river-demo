<script setup lang="ts">
import type { WhyItem } from '~/data/why'

defineProps<{
  items: WhyItem[]
}>()
</script>

<template>
  <section
    title="Why Choose Us"
    subtitle="Not all rafting trips are created equal"
  >
    <v-row>
      <!-- 
      <h1>hi</h1> -->
      <v-col
        v-for="item in items"
        :key="item.title"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card
          class="pa-6 h-100 why-card"
          elevation="1"
          rounded="xl"
        >
          <v-icon
            :icon="item.icon"
            size="36"
            class="mb-4 text-primary"
          />

          <h3 class="text-h6 font-weight-bold mb-2">
            {{ item.title }}
          </h3>

          <p class="text-body-2 text-medium-emphasis">
            {{ item.description }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.why-card {
  transition: all 0.25s ease;
  cursor: pointer;
}

.why-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 14px 32px rgba(0,0,0,0.08);
}
</style>