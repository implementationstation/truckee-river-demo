<template>
  <section class="section-block">
    <p class="section-label">{{ label }}</p>
    <h2>{{ title }}</h2>
    <p class="section-intro">{{ intro }}</p>

    <div class="section-content">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  title: string
  intro?: string
}>()
</script>

<style scoped>
.section-block {
  margin-top: 88px;
}

.section-label {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.78rem;
  opacity: 0.7;
  margin-bottom: 12px;
}

h2 {
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.05;
  max-width: 820px;
}

.section-intro {
  margin-top: 20px;
  max-width: 720px;
  font-size: 1.12rem;
  line-height: 1.7;
  opacity: 0.82;
}

.section-content {
  margin-top: 36px;
}
</style>