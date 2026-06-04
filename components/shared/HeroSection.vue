<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  image: string
}>()
</script>

<template>
  <div
    class="hero d-flex align-center"
    :style="`background-image:url(${image})`"
  >
    <v-container class="text-white">

      <div class="max-w-lg">
        <h1 class="text-h3 font-weight-bold mb-4">
          {{ title }}
        </h1>

        <p v-if="subtitle" class="text-body-1 mb-6">
          {{ subtitle }}
        </p>

        <v-btn color="primary" size="large" rounded="xl">
          Book Your Trip
        </v-btn>
      </div>

    </v-container>
  </div>
</template>

<style scoped>
.hero {
  height: 420px;
  background-size: cover;
  background-position: center;
}
</style>