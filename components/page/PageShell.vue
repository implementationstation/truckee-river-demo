<template>
  <v-main>
    <v-container class="page-container">
      <slot />
    </v-container>
  </v-main>
</template>

<style scoped>
.page-container {
  max-width: 1180px;
  padding-top: 48px;
  padding-bottom: 80px;
}

@media (min-width: 960px) {
  .page-container {
    padding-top: 80px;
    padding-bottom: 120px;
  }
}
</style>