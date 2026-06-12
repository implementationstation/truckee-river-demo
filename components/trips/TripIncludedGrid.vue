<template>
  <section class="included-section">
    <p class="eyebrow">WHATS INCLUDED</p>
    <h2>We provide everything you need to handle the river, like a local.</h2>

    <v-row class="included-grid">
      <v-col
        v-for="item in items"
        :key="item"
        cols="12"
        sm="6"
        md="4"
      >
        <div class="included-item">
          <span>✓</span>
          <p>{{ item }}</p>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<style scoped>
.included-section {
  margin-top: 96px;
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
  max-width: 760px;
}

.included-grid {
  margin-top: 36px;
}

.included-item {
  height: 100%;
  display: flex;
  gap: 16px;
  padding: 24px;
  border-radius: 24px;
  background: rgba(0, 0, 0, 0.04);
}

.included-item span {
  font-weight: 900;
}

.included-item p {
  line-height: 1.6;
}
</style>