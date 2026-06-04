<script setup lang="ts">
import AppNavbar from '~/components/layout/AppNavBar.vue';
import AppContainer from '~/components/layout/AppContainer.vue';
import AppFooter from '~/components/layout/AppFooter.vue';
</script>

<template>
  <v-app>

    <!-- NAVBAR -->
    <AppNavbar />

    <!-- MAIN CONTENT -->
    <v-main>
      <AppContainer>
        <slot />
      </AppContainer>
    </v-main>

    <!-- FOOTER -->
    <AppFooter />

  </v-app>
</template>