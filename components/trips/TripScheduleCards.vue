<template>
  <section class="schedule-section">
    <p class="eyebrow">WHITEWATER TRIP SCHEDULE</p>
    <h2>Choose your preferred time</h2>
    <p class="intro">
     We offer a Morning Run & Afternoon Run down the Boca-Floriston Gorge route. This means one trip, served twice a day. The Boca Run is geared towards first-timers & regular thrill seekers alike. Groups are encouraged. The total time from takeoff (IRIE Offices) to landing (Back at the offices-done with rafting) is 3.5 - 4 hours.
    </p>

    <v-row class="cards">
      <v-col
        v-for="trip in trips"
        :key="trip.title"
        cols="12"
        md="6"
      >
        <v-card class="trip-card" rounded="xl" variant="tonal">
          <v-card-title>{{ trip.title }}</v-card-title>
          <v-card-subtitle>{{ trip.time }}</v-card-subtitle>
          <v-card-text>{{ trip.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  trips: {
    title: string
    time: string
    text: string
  }[]
}>()
</script>

<style scoped>
.schedule-section {
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
  max-width: 660px;
  line-height: 1.7;
  font-size: 1.1rem;
  opacity: 0.82;
}

.cards {
  margin-top: 36px;
}

.trip-card {
  height: 100%;
  padding: 28px;
}

.trip-card :deep(.v-card-title) {
  font-size: 1.5rem;
  font-weight: 800;
}

.trip-card :deep(.v-card-subtitle) {
  margin-top: 8px;
  opacity: 0.8;
}

.trip-card :deep(.v-card-text) {
  margin-top: 18px;
  line-height: 1.7;
}
</style>