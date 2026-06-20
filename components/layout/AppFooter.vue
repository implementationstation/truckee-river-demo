<script setup lang="ts">
import { footerSections, footerMeta } from '~/data/footer.links'
</script>

<template>
  <v-footer
    class="pa-10"
    color="grey-lighten-4"
  >
    <v-container>

      <v-row>

        <!-- BRAND / CTA -->
        <v-col cols="12" md="4">
          <div class="text-h6 font-weight-bold mb-2">
            {{ footerMeta.brand }}
          </div>

          <div class="text-body-2 mb-4">
            {{ footerMeta.tagline }}
          </div>

          <!-- <v-btn
            :to="footerMeta.cta.to"
            color="primary"
            class="text-none"
          >
            {{ footerMeta.cta.title }}
          </v-btn> -->
          <v-img src="/public/IRIE_Web_Logo.gif" max-height="120" max-width="120"></v-img>

          <!-- SOCIALS -->
          <div class="mt-4 d-flex ga-2">
            <v-btn
              v-for="social in footerMeta.socials"
              :key="social.icon"
              :href="social.href"
              icon
              variant="text"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- LINK SECTIONS -->
        <v-col
          v-for="section in footerSections"
          :key="section.title"
          cols="6"
          md="2"
        >
          <div class="font-weight-bold mb-2">
            {{ section.title }}
          </div>

          <v-list density="compact" bg-color="transparent">

            <v-list-item
              v-for="link in section.links"
              :key="link.title"
              :to="link.to"
              :href="link.href"
              link
              class="px-0"
            >
              {{ link.title }}
            </v-list-item>

          </v-list>
        </v-col>

      </v-row>

      <!-- DIVIDER -->
      <v-divider class="my-6" />

      <!-- BOTTOM BAR -->
      <div class="d-flex flex-column flex-md-row justify-space-between align-center text-caption">

        <div>
          © {{ new Date().getFullYear() }} {{ footerMeta.brand }}
        </div>

        <div class="d-flex ga-4 mt-2 mt-md-0">
          <NuxtLink to="/privacy">Privacy</NuxtLink>
          <NuxtLink to="/terms">Terms</NuxtLink>
        </div>

      </div>

    </v-container>
  </v-footer>
</template>