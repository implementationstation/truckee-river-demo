<template>
  <v-container class="py-10 text-center">
    <v-row justify="center" class="ga-6">
      <v-col cols="6" md="2" v-for="(item,i) in items" :key="i">
        <div class="trust">
          <div class="big">{{ item.value }}</div>
          <div class="label">{{ item.label }}</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({ items: Array })
</script>

<style scoped>
.big { font-size: 24px; font-weight: bold; }
.label { font-size: 13px; opacity: .7; }
</style>