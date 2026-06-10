<script setup lang="ts">
import { useHead } from '#imports'
import tripPlanning from '~/data/msp/trip-planning'
//import {pages} from '~/data/content/pages';

const page = tripPlanning

useHead({
  title: page.seo.title,
  meta: [
    {
      name: 'description',
      content: page.seo.description
    }
  ]
})
</script>

<template>
        <!-- =========================
    HERO
    ========================== -->
    <v-sheet
      class="hero-section d-flex align-center"
      min-height="720"
    >
      <div class="hero-overlay" />

      <v-container class="position-relative z-2">
        <v-row align="center">
          <v-col cols="12" md="8" lg="7">
            <div class="text-overline text-white mb-5 tracking">
              IRIE RAFTING COMPANY
            </div>

            <h1 class="hero-title mb-6">
              Locally Owned. Adventure Driven.
            </h1>

            <p class="hero-subtitle mb-8">
              Sharing the Truckee River with visitors for generations.
            </p>

            <!-- <div class="d-flex flex-wrap ga-3 mb-10">
              <v-chip
                color="white"
                variant="flat"
                class="font-weight-medium"
              >
                Reservation Info
              </v-chip>

              <v-chip
                color="white"
                variant="flat"
                class="font-weight-medium"
              >
                Packing Lists
              </v-chip>

              <v-chip
                color="white"
                variant="flat"
                class="font-weight-medium"
              >
                Pricing & Policies
              </v-chip>

              <v-chip
                color="white"
                variant="flat"
                class="font-weight-medium"
              >
                Trip Photos
              </v-chip>
            </div> -->

            <div class="d-flex flex-wrap ga-4">
              <v-btn
                size="x-large"
                color="primary"
                elevation="4"
                rounded="xl"
                href="tel:15305824900"
              >
                <v-icon start>
                  mdi-phone
                </v-icon>

                Call Now
              </v-btn>

              <v-btn
                size="x-large"
                color="white"
                variant="outlined"
                rounded="xl"
                href="mailto:info@raftirie.com"
              >
                <v-icon start>
                  mdi-email-outline
                </v-icon>

                Contact Us
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
</template>

<style scoped>
.trip-page {
  background:
    linear-gradient(
      to bottom,
      #f8fafc,
      #eef2f6
    );
}

/* HERO */
.hero-section {
  position: relative;
/* //CHANGED */
  background:
    url('/images/l-lake-tahoe-river-rafting-guides.webp');

  background-size: cover;
  background-position: center;

  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      135deg,
      rgba(9, 16, 24, 0.88),
      rgba(17, 37, 54, 0.72)
    );
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1;
  font-weight: 800;
  color: white;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 1.15rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.92);
  max-width: 720px;
}

.tracking {
  letter-spacing: 0.2em;
}

/* META */
/* .meta-wrapper {
  margin-top: -80px;
  position: relative;
  z-index: 10;
}

.meta-card {
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.96);
} */

/* CONTENT */
/* .content-wrapper {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.section-spacing {
  margin-bottom: 7rem;
}

.content-section {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.section-line {
  width: 90px;
  height: 5px;
  border-radius: 999px;
  background:
    linear-gradient(
      90deg,
      rgb(var(--v-theme-primary)),
      #66c7ff
    );
}

.section-number {
  width: 54px;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  background: rgb(var(--v-theme-primary));
  color: white;

  font-weight: 700;
}

.section-body {
  max-width: 900px;
  line-height: 1.9;
} */


</style>