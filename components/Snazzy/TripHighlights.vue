<!-- Fast-scan benefits (critical for bounce reduction)
URL: https://chatgpt.com/share/6a28e91e-3704-83ea-a427-6cced2f3a3e7 -->



<template>
  <v-container class="py-10">
    <v-row class="ga-6">
      <v-col v-for="(item,i) in items" :key="i" cols="6" md="3">
        <div class="highlight">
          <div class="icon mb-2">{{ item.icon }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="sub">{{ item.sub }}</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({ items: Array })
</script>

<style scoped>
.highlight {
  text-align: center;

  .title { font-weight: 600; }
  .sub { font-size: 14px; opacity: 0.7; }
}
</style>