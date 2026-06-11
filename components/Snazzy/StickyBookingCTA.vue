<template>
  <div class="sticky">
    <div>{{ price }}</div>
    <v-btn color="primary">Book Now</v-btn>
  </div>
</template>

<script setup>
defineProps({ price: String })
</script>

<style scoped>
.sticky {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid #eee;
}
</style>