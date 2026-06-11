<template>
  <div class="hero">
    <v-img :src="image" class="bg" cover />

    <div class="overlay" />

    <v-container class="content fill-height d-flex align-end">
      <div class="text-wrap">
        <div class="chips mb-4">
          <v-chip v-for="c in chips" :key="c" size="small">{{ c }}</v-chip>
        </div>

        <h1 class="text-h2 font-weight-bold mb-4">
          {{ title }}
        </h1>

        <p class="text-h6 mb-6">
          {{ subtitle }}
        </p>

        <!-- Booking Card -->
        <div class="booking-card">
          <div class="price">{{ price }}</div>
          <v-btn color="primary" size="large" block>
            Book Now
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String,
  price: String,
  chips: Array
})
</script>

<style scoped>
.hero {
  position: relative;
  height: 90vh;

  .bg {
    position: absolute;
    inset: 0;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }

  .content {
    position: relative;
    z-index: 2;
    color: white;
  }

  .text-wrap {
    max-width: 600px;
  }

  .booking-card {
    background: white;
    color: black;
    padding: 16px;
    border-radius: 12px;
    width: 260px;
  }

  .price {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
  }
}
</style>