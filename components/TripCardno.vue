<template>

  <v-card
    rounded="xl"
    elevation="2"
    class="trip-card"
    :to="link"
    hover
  >

    <!-- IMAGE -->
    <!-- <NuxtImg
      :src="image"
      :alt="title"
      format="webp"
      quality="80"
      height="220"
      class="rounded-t-xl"
    /> -->
    <v-img
                :src="image"
                height="320"
                cover
                rounded="lg"
              />

    <!-- BADGE -->
    <v-chip
      v-if="badge"
      class="ma-3"
      color="primary"
      size="small"
    >
      {{ badge }}
    </v-chip>

    <!-- CONTENT -->
    <v-card-title class="text-h6 font-weight-bold">
      {{ title }}
    </v-card-title>

    <!-- QUICK FACTS -->
    <v-card-text class="pt-0">

      <div class="text-body-2 text-medium-emphasis mb-2">
        {{ duration }} • {{ difficulty }}
      </div>

      <div class="mb-3">
        {{ description }}
      </div>

      <!-- PRICE -->
      <div class="text-subtitle-1 font-weight-bold">
        From ${{ price }}
      </div>

    </v-card-text>

    <!-- ACTION -->
    <v-card-actions>

      <v-btn
        color="primary"
        block
        size="large"
        :to="link"
      >
        View Trip
      </v-btn>

    </v-card-actions>

  </v-card>

</template>

<script setup lang="ts">

/*
========================
PROPS (SCALABLE)
========================
*/

defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  duration: String,
  difficulty: String,
  price: Number,
  badge: String
})

</script>

<style scoped>

.trip-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.trip-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

</style>