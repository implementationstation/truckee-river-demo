<template>
  <v-container class="py-12">
    <v-row class="mb-8">
      <v-col>
        <h2 class="text-h4 font-weight-bold">Why Choose Us</h2>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col
        v-for="(v, i) in values"
        :key="i"
        cols="12"
        sm="6"
        md="3"
      >
        <div class="d-flex ga-4 pa-4 align-start value-item">
          <v-icon size="28" color="primary">
            {{ v.icon }}
          </v-icon>

          <div>
            <div class="font-weight-medium">
              {{ v.title }}
            </div>
            <div class="text-caption text-medium-emphasis">
              {{ v.text }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const values = [
  {
    title: "Adventure",
    icon: "mdi-hiking",
    text: "Real outdoor experiences."
  },
  {
    title: "Safety",
    icon: "mdi-lifebuoy",
    text: "Guided and controlled."
  },
  {
    title: "Memories",
    icon: "mdi-camera",
    text: "Capture every moment."
  },
  {
    title: "Nature",
    icon: "mdi-mountain",
    text: "Pure river environments."
  }
]
</script>

<style scoped>
.value-item {
  border-radius: 12px;
  transition: background 0.2s ease;
}

.value-item:hover {
  background: rgba(var(--v-theme-primary), 0.06);
}
</style>