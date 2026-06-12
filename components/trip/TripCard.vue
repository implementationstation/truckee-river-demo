<script setup lang="ts">
defineProps<{
  slug: string
  title: string
  description: string
  image: string
  price: string
  duration: string
  difficulty: string
}>()
</script>

<template>
  <v-card
    rounded="xl"
    elevation="2"
    class="trip-card d-flex flex-column h-100"
  >

    <!-- IMAGE -->
    <NuxtLink :to="`${slug}`">
      <v-img
        :src="image"
        height="220"
        cover
        :alt="title"
      />
    </NuxtLink>

    <!-- CONTENT -->
    <v-card-text class="flex-grow-1">
        <v-chip size="small" class="mb-2">
  {{ difficulty }}
</v-chip>

      <!-- TITLE -->
      <div class="text-h6 font-weight-bold mb-2">
        {{ title }}
      </div>

      <!-- DESCRIPTION -->
      <div class="text-body-2 text-grey mb-4">
        {{ description }}
      </div>

      <!-- META -->
      <div class="d-flex justify-space-between text-body-2 mb-2">
        <span>{{ duration }}</span>
        <strong class="ml-4">{{ price }}</strong>
      </div>

    </v-card-text>

    <!-- CTA -->
    <v-card-actions>
      <v-btn
        :to="`${slug}`"
        color="primary"
        block
        rounded="xl"
      >
        View Trip
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<style scoped>
.trip-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.trip-card:hover {
  transform: translateY(-4px);
}

.text-body-2 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>