<!-- These are optional enhancements to be used 1st two on globalcss and last is not sure
 
<style lang="css" scoped>
.v-btn {
  text-transform: none;
  font-weight: 500;
}

.v-list-item {
  border-radius: 10px;
}


.v-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
  transition: all 0.2s ease;
}
</style> -->

<script setup lang="ts">
import { navLinks } from '~/data/nav.links'

const drawer = ref(false)
</script>

<template>
  <v-app-bar elevation="1" color="white" height="72">
    
    <!-- LOGO -->
      <v-img
        class="mx-2"
        src="/public/IRIE_web_logo.gif"
        max-height="120"
        max-width="120"
        contain
      ></v-img>

    <v-spacer />

    <!-- DESKTOP NAV -->
    <div class="d-none d-md-flex align-center ga-2">

      <template v-for="link in navLinks" :key="link.title">

        <!-- DROPDOWN -->
        <v-menu v-if="link.children" open-on-hover>
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text">
              {{ link.title }}
              <v-icon end size="18">mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list density="comfortable">
            <v-list-item
              v-for="child in link.children"
              :key="child.title"
              :to="child.to"
              link
            >
              {{ child.title }}
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- NORMAL LINK -->
        <v-btn
          v-else
          :to="link.to"
          :variant="link.cta ? 'flat' : 'text'"
          :color="link.cta ? 'primary' : 'default'"
          class="text-none"
        >
          {{ link.title }}
        </v-btn>

      </template>

    </div>

    <!-- MOBILE ICON -->
    <v-btn
      icon="mdi-menu"
      class="d-md-none"
      @click="drawer = !drawer"
    />

  </v-app-bar>

  <!-- MOBILE DRAWER -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
  >
    <v-list>

      <template v-for="link in navLinks" :key="link.title">

        <!-- EXPANDABLE -->
        <v-list-group v-if="link.children" :value="link.title">

          <template #activator="{ props }">
            <v-list-item v-bind="props">
              {{ link.title }}
            </v-list-item>
          </template>

          <v-list-item
            v-for="child in link.children"
            :key="child.title"
            :to="child.to"
            link
          >
            {{ child.title }}
          </v-list-item>

        </v-list-group>

        <!-- NORMAL -->
        <v-list-item
          v-else
          :to="link.to"
          link
        >
          <span :class="link.cta ? 'text-primary font-weight-bold' : ''">
            {{ link.title }}
          </span>
        </v-list-item>

      </template>

    </v-list>
  </v-navigation-drawer>
</template>