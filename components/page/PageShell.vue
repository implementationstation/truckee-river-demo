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
  padding-top: 0px;
  padding-bottom: 81px;
}

@media (min-width: 960px) {
  .page-container {
    padding-top: 0px;
    padding-bottom: 81px;
  }
}
</style>