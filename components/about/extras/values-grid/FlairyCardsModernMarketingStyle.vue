<template>
  <v-container class="py-12">
    <div class="text-center mb-10">
      <h2 class="text-h3 font-weight-bold">What We Stand For</h2>
      <p class="text-medium-emphasis">
        Built for people who want more than just a float down the river.
      </p>
    </div>

    <v-row>
      <v-col
        v-for="(v, i) in values"
        :key="i"
        cols="12"
        md="4"
      >
        <v-card class="value-card pa-6 h-100">
          <div class="icon-wrap mb-4">
            <v-icon size="40">{{ v.icon }}</v-icon>
          </div>

          <div class="text-h6 font-weight-bold mb-2">
            {{ v.title }}
          </div>

          <div class="text-body-2 text-medium-emphasis">
            {{ v.text }}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const values = [
  {
    title: "Real Adventure",
    icon: "mdi-kayak",
    text: "Wild rivers, real rapids, and zero artificial experiences."
  },
  {
    title: "Expert Guides",
    icon: "mdi-account-tie",
    text: "Professionals who know every bend, current, and safety line."
  },
  {
    title: "Scenic Rivers",
    icon: "mdi-river",
    text: "Routes chosen for beauty, excitement, and unforgettable views."
  }
]
</script>

<style scoped>
.value-card {
  border-radius: 20px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.7);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.value-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--v-theme-primary), 0.12);
}
</style>