<template>
  <section class="booking-cta">
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
  eyebrow: string
  title: string
  text: string
  buttonText: string
}>()
</script>

<style scoped>
.booking-cta {
  margin-top: 104px;
  padding: 40px;
  border-radius: 36px;
  display: grid;
  gap: 28px;
  background: rgba(0, 0, 0, 0.05);
}

@media (min-width: 800px) {
  .booking-cta {
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 56px;
  }
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.78rem;
  opacity: 0.7;
  margin-bottom: 14px;
}

h2 {
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.05;
}

p {
  margin-top: 18px;
  max-width: 640px;
  line-height: 1.7;
  opacity: 0.82;
}
</style>