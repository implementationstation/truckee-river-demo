<template>

  <v-card
    rounded="xl"
    elevation="1"
    class="pa-6"
  >

    <p class="mb-4 text-body-1">
      “{{ quote }}”
    </p>

    <strong>
      — {{ author }}
    </strong>

  </v-card>

</template>

<script setup>

const props = defineProps({
  quote: String,
  author: String
})

</script>