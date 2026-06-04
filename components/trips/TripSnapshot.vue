<template>
  <section class="snapshot">
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.label"
        cols="6"
        md="3"
      >
        <div class="snapshot-card">
          <p>{{ item.label }}</p>
          <strong>{{ item.value }}</strong>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: {
    label: string
    value: string
  }[]
}>()
</script>

<style scoped>
.snapshot {
  margin-top: 24px;
}

.snapshot-card {
  height: 100%;
  padding: 28px;
  border-radius: 28px;
  background: rgba(0, 0, 0, 0.04);
}

.snapshot-card p {
  margin-bottom: 8px;
  opacity: 0.7;
}

.snapshot-card strong {
  font-size: 1.5rem;
}
</style>