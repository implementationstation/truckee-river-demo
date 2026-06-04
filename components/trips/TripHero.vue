<template>
  <section class="trip-hero">
    <div class="trip-hero__content">
      <p class="eyebrow">{{ eyebrow }}</p>

      <h1>{{ title }}</h1>

      <p class="subtitle">
        {{ subtitle }}
      </p>

      <div class="actions">
        <v-btn size="large" rounded="xl">
          {{ primaryAction }}
        </v-btn>

        <v-btn size="large" rounded="xl" variant="tonal">
          {{ secondaryAction }}
        </v-btn>
      </div>
    </div>

    <div class="trip-hero__media">
      <div class="image-placeholder">
        River image here
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  subtitle: string
  primaryAction: string
  secondaryAction: string
}>()
</script>

<style scoped>
.trip-hero {
  display: grid;
  gap: 40px;
  align-items: center;
  padding: 48px 0 72px;
}

@media (min-width: 960px) {
  .trip-hero {
    grid-template-columns: 1fr 0.9fr;
    gap: 72px;
    padding: 72px 0 96px;
  }
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.78rem;
  opacity: 0.7;
  margin-bottom: 16px;
}

h1 {
  font-size: clamp(3rem, 7vw, 6rem);
  line-height: 0.95;
  max-width: 860px;
}

.subtitle {
  margin-top: 24px;
  max-width: 660px;
  font-size: 1.18rem;
  line-height: 1.7;
  opacity: 0.84;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 36px;
}

.trip-hero__media {
  min-height: 360px;
}

.image-placeholder {
  height: 100%;
  min-height: 360px;
  border-radius: 36px;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.06);
  font-weight: 700;
  opacity: 0.75;
}
</style>