<template>
  <section class="cta-section">
    <div>
      <p class="eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>

    <v-btn size="large" rounded="xl">
      {{ buttonText }}
    </v-btn>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  text: string
  buttonText: string
}>()
</script>

<style scoped>
.cta-section {
  margin-top: 96px;
  padding: 40px;
  border-radius: 32px;
  display: grid;
  gap: 28px;
  background: rgba(0, 0, 0, 0.04);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.7;
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.05;
  max-width: 760px;
}

p {
  max-width: 680px;
  line-height: 1.7;
}
</style>