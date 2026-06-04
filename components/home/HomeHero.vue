<template>
  <v-container class="py-16 py-md-24">
    <section class="hero">
      <p class="eyebrow">{{ page.hero.eyebrow }}</p>
      <h1>{{ page.hero.title }}</h1>
      <p>{{ page.hero.subtitle }}</p>

      <div class="hero-actions">
        <v-btn size="large" rounded="xl">
          {{ page.hero.primaryAction }}
        </v-btn>

        <v-btn size="large" rounded="xl" variant="tonal">
          {{ page.hero.secondaryAction }}
        </v-btn>
      </div>
    </section>
  </v-container>
</template>

<script setup lang="ts">
import { truckeeHomePage as page } from '~/data/pages/truckeeHome'

useSeoMeta({
  title: page.seo.title,
  description: page.seo.description,
  ogTitle: page.seo.title,
  ogDescription: page.seo.description,
})
</script>

<style scoped>
.hero {
  padding: 48px 0 72px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.7;
  margin-bottom: 16px;
}

h1 {
  max-width: 920px;
  font-size: clamp(3rem, 8vw, 6.5rem);
  line-height: 0.95;
}

.hero p {
  margin-top: 24px;
  max-width: 680px;
  font-size: 1.2rem;
  line-height: 1.7;
  opacity: 0.85;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 36px;
}
</style>