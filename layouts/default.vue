<!-- STARTED WITH THIS ON JUNE 7
 
<script setup lang="ts">
import AppNavbar from '~/components/layout/AppNavBar.vue';
import AppContainer from '~/components/layout/AppContainer.vue';
import AppFooter from '~/components/layout/AppFooter.vue';
</script>

<template>
  <v-app>

    <AppNavbar />

    <v-main>
      <AppContainer>
        <slot />
      </AppContainer>
    </v-main>

    <AppFooter />

  </v-app>
</template>

-->
<template>
   <v-app>
     <AppNavbar />           <!-- fixed, sits above page content -->
     <v-main>
       <slot />
     </v-main>
     <AppFooter />
   </v-app>
 </template>

 <script setup>
 import AppFooter from '~/components/layout/AppFooter.vue';
 import AppNavbar from '~/components/layout/AppNavBar.vue';
 </script>

 <style>
 /* Push main content below the 72px navbar */
 .rr-main { padding-top: 72px !important; }
 </style>
