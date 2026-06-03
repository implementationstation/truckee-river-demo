<template>
  <v-row class="card-row" align="stretch">
    <v-col
      v-for="card in cards"
      :key="card.title"
      cols="12"
      md="4"
    >
      <v-card class="info-card" rounded="xl" variant="tonal">
        <v-card-title>{{ card.title }}</v-card-title>
        <v-card-text>{{ card.text }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps<{
  cards: {
    title: string
    text: string
  }[]
}>()
</script>

<style scoped>
.card-row {
  row-gap: 20px;
}

.info-card {
  height: 100%;
  padding: 20px;
}
</style>