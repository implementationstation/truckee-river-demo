<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <section class="py-12">

    <div v-if="title" class="mb-6">
      <h2 class="text-h4 font-weight-bold">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="text-body-1 text-grey">
        {{ subtitle }}
      </p>
    </div>

    <slot />

  </section>
</template>