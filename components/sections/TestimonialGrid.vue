<template>
  <section class="testimonials">
    <p class="eyebrow">Guest Reviews</p>

    <h2>Great days on the river, remembered forever.</h2>

    <p class="intro">
      Hear what some of our recent rafters have to say about us and the experience they had.
    </p>

    <v-row class="cards">
      <v-col
        v-for="item in items"
        :key="item.name"
        cols="12"
        md="4"
      >
        <v-card class="testimonial-card" rounded="xl" variant="tonal">
          <v-card-text>
            “{{ item.quote }}”
          </v-card-text>

          <v-card-title>
            {{ item.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ item.detail }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: {
    quote: string
    name: string
    detail: string
  }[]
}>()
</script>

<style scoped>
.testimonials {
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

.intro {
  margin-top: 20px;
  max-width: 680px;
  line-height: 1.7;
  opacity: 0.82;
}

.cards {
  margin-top: 36px;
}

.testimonial-card {
  height: 100%;
  padding: 24px;
}

.testimonial-card :deep(.v-card-text) {
  font-size: 1.08rem;
  line-height: 1.7;
}

.testimonial-card :deep(.v-card-title) {
  margin-top: 16px;
  font-weight: 800;
}
</style>