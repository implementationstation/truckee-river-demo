<script setup lang="ts">
const items = [
  {
    title: "Local River Experts",
    description: "Guides who know every bend, rapid, and story of the Truckee.",
    icon: "mdi-map"
  },
  {
    title: "Safety First. Always.",
    description: "Top-tier equipment + experienced guides = peace of mind.",
    icon: "mdi-shield-check"
  },
  {
    title: "Perfect for Groups",
    description: "Families, friends, and teams — we make it seamless.",
    icon: "mdi-account-group"
  },
  {
    title: "All-Inclusive Trips",
    description: "Gear, transportion, safety-orientation and guidance are handled by us.",
    icon: "mdi-package-variant"
  }
]
</script>

<template>
  <section
    title="I.R.I.E River as your Guide"
    subtitle="Not all rafting trips are created equal"
  >
    <VRow>
      <VCol
        v-for="item in items"
        :key="item.title"
        cols="12"
        sm="6"
        md="3"
      >
        <VCard
          class="pa-6 h-100 hover-card"
          elevation="1"
          rounded="xl"
        >
          <VIcon
            :icon="item.icon"
            size="36"
            class="mb-4 text-primary"
          />

          <h3 class="text-h6 font-weight-bold mb-2">
            {{ item.title }}
          </h3>

          <p class="text-body-2 text-medium-emphasis">
            {{ item.description }}
          </p>
        </VCard>
      </VCol>
    </VRow>
  </section>
</template>

<style scoped>
.hover-card {
  transition: all 0.25s ease;
}

.hover-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
}
</style>