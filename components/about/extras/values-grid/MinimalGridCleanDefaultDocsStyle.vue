<template>
  <v-container class="py-12">
    <v-row class="text-center mb-8">
      <v-col>
        <h2 class="text-h4 font-weight-bold">Our Values</h2>
        <p class="text-medium-emphasis">
          What defines every rafting experience we run.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(item, i) in values"
        :key="i"
        cols="12"
        md="4"
      >
        <v-card variant="tonal" class="pa-6 h-100">
          <v-icon size="36" class="mb-4" color="primary">
            {{ item.icon }}
          </v-icon>

          <h3 class="text-h6 font-weight-bold mb-2">
            {{ item.title }}
          </h3>

          <p class="text-body-2 text-medium-emphasis">
            {{ item.text }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const values = [
  {
    title: "Real Adventure",
    icon: "mdi-hiking",
    text: "Authentic river experiences built around exploration and challenge."
  },
  {
    title: "Safety First",
    icon: "mdi-lifebuoy",
    text: "Guides, gear, and decisions focused on your protection."
  },
  {
    title: "Great Memories",
    icon: "mdi-camera",
    text: "Moments you’ll want to relive long after the river ends."
  }
]
</script>