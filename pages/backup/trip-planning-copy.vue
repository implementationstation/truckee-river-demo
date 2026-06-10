```vue
<!-- ~/pages/trip-planning.vue -->

<script setup lang="ts">
import { useHead } from '#imports'
import tripPlanning from '~/data/msp/trip-planning'

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
  <div class="trip-page">
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
              {{ page.hero.heading }}
            </h1>

            <p class="hero-subtitle mb-8">
              {{ page.hero.subtitle }}
            </p>

            <div class="d-flex flex-wrap ga-3 mb-10">
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
            </div>

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

    <!-- =========================
    FLOATING META CARDS
    ========================== -->
    <v-container class="meta-wrapper">
      <v-row>
        <v-col cols="6" md="3">
          <v-card
            rounded="xl"
            elevation="6"
            class="meta-card"
          >
            <v-card-text class="pa-6">
              <v-icon
                size="34"
                color="primary"
                class="mb-4"
              >
                mdi-weather-sunny
              </v-icon>

              <div class="text-caption text-medium-emphasis mb-1">
                Season
              </div>

              <div class="text-h6 font-weight-bold">
                {{ page.meta.season }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6" md="3">
          <v-card
            rounded="xl"
            elevation="6"
            class="meta-card"
          >
            <v-card-text class="pa-6">
              <v-icon
                size="34"
                color="primary"
                class="mb-4"
              >
                mdi-account-child
              </v-icon>

              <div class="text-caption text-medium-emphasis mb-1">
                Minimum Age
              </div>

              <div class="text-h6 font-weight-bold">
                {{ page.meta.minimumAge }}+
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6" md="3">
          <v-card
            rounded="xl"
            elevation="6"
            class="meta-card"
          >
            <v-card-text class="pa-6">
              <v-icon
                size="34"
                color="primary"
                class="mb-4"
              >
                mdi-map-marker
              </v-icon>

              <div class="text-caption text-medium-emphasis mb-1">
                Location
              </div>

              <div class="text-h6 font-weight-bold">
                Tahoe / Truckee
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6" md="3">
          <v-card
            rounded="xl"
            elevation="6"
            class="meta-card"
          >
            <v-card-text class="pa-6">
              <v-icon
                size="34"
                color="primary"
                class="mb-4"
              >
                mdi-lifebuoy
              </v-icon>

              <div class="text-caption text-medium-emphasis mb-1">
                Support
              </div>

              <div class="text-h6 font-weight-bold">
                530.582.4900
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- =========================
    CONTENT SECTIONS
    ========================== -->
    <v-container class="content-wrapper">
      <section
        v-for="(section, sectionIndex) in page.sections"
        :key="section.id"
        class="section-spacing"
      >
        <v-row justify="center">
          <v-col cols="12" lg="11">
            <v-sheet
              rounded="xl"
              class="content-section pa-8 pa-md-12"
            >
              <!-- SECTION HEADER -->
              <div class="mb-10">
                <div class="section-line mb-5" />

                <div class="d-flex align-center ga-4 mb-4">
                  <div class="section-number">
                    {{ String(sectionIndex + 1).padStart(2, '0') }}
                  </div>

                  <h2 class="text-h4 font-weight-bold">
                    {{ section.heading }}
                  </h2>
                </div>

                <p
                  v-if="section.body"
                  class="text-body-1 text-medium-emphasis section-body"
                >
                  {{ section.body }}
                </p>
              </div>

              <!-- FEATURE GRID -->
              <v-row
                v-if="section.items"
                class="mt-2"
              >
                <v-col
                  v-for="item in section.items"
                  :key="item.title"
                  cols="12"
                  md="6"
                  lg="4"
                >
                  <v-card
                    class="feature-card"
                    rounded="xl"
                    elevation="0"
                    height="100%"
                  >
                    <v-card-text class="pa-7">
                      <v-avatar
                        size="58"
                        color="primary"
                        class="mb-5"
                      >
                        <v-icon
                          size="30"
                          color="white"
                        >
                          {{ item.icon || 'mdi-check-bold' }}
                        </v-icon>
                      </v-avatar>

                      <div class="text-h6 font-weight-bold mb-3">
                        {{ item.title }}
                      </div>

                      <div
                        v-if="item.description"
                        class="text-body-2 text-medium-emphasis"
                      >
                        {{ item.description }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- =========================
    IMPORTANT NOTES
    ========================== -->
    <v-container class="pb-16">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <v-alert
            type="warning"
            variant="tonal"
            rounded="xl"
            border="start"
            class="important-alert"
          >
            <div class="text-h5 font-weight-bold mb-5">
              Important Notes
            </div>

            <ul class="pl-5">
              <li
                v-for="note in page.importantNotes"
                :key="note"
                class="mb-3"
              >
                {{ note }}
              </li>
            </ul>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>

    <!-- =========================
    CTA SECTION
    ========================== -->
    <v-sheet class="cta-section py-16">
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            md="9"
            lg="7"
            class="text-center"
          >
            <div class="text-h3 font-weight-bold text-white mb-5">
              Ready To Plan Your Adventure?
            </div>

            <p class="text-h6 text-grey-lighten-2 mb-10">
              From family rafting trips to large group adventures,
              our team is here to help you every step of the way.
            </p>

            <div class="d-flex justify-center flex-wrap ga-4">
              <v-btn
                size="x-large"
                color="primary"
                rounded="xl"
                elevation="4"
                href="tel:15305824900"
              >
                <v-icon start>
                  mdi-phone
                </v-icon>

                Call 530.582.4900
              </v-btn>

              <v-btn
                size="x-large"
                color="white"
                variant="outlined"
                rounded="xl"
                href="mailto:info@raftirie.com"
              >
                <v-icon start>
                  mdi-email
                </v-icon>

                Email Us
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
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

  background:
    url('/images/processed/small-group-guided-rafters-enjoying-truckee-river.webp');

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
.meta-wrapper {
  margin-top: -80px;
  position: relative;
  z-index: 10;
}

.meta-card {
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.96);
}

/* CONTENT */
.content-wrapper {
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
}

/* FEATURE CARDS */
.feature-card {
  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,0.95),
      rgba(248,250,252,0.95)
    );

  border: 1px solid rgba(0,0,0,0.05);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-6px);

  border-color: rgba(var(--v-theme-primary), 0.3);

  box-shadow:
    0 18px 40px rgba(0,0,0,0.08);
}

/* IMPORTANT */
.important-alert {
  background: rgba(255, 248, 225, 0.8);
  backdrop-filter: blur(10px);
}

/* CTA */
.cta-section {
  position: relative;

  background:
    linear-gradient(
      135deg,
      rgba(10, 20, 30, 0.95),
      rgba(20, 40, 60, 0.92)
    ),
    url('/images/l-guided-river-rafting-trips-tahoe.webp');

  background-size: cover;
  background-position: center;
}
</style>
```
