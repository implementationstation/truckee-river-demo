<template>
  <v-container class="py-16">
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(q,i) in items"
        :key="i"
        :title="q.q"
        :text="q.a"
      />
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
defineProps({ items: Array })
</script>