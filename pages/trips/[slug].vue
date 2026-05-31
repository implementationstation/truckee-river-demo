<!-- ~/pages/trips/[slug].vue -->

<script setup lang="ts">
import truckeeHalfDay from '~/data/msp/truckee-half-day'

const trip = truckeeHalfDay
</script>

<template>
  <div>
    <!-- HERO -->
    <v-sheet
      class="hero-section d-flex align-center"
      color="grey-darken-4"
      min-height="600"
    >
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="7">
            <div class="text-overline mb-4">
              Whitewater Rafting Adventure
            </div>

            <h1 class="text-h2 font-weight-bold mb-4">
              {{ trip.hero.heading }}
            </h1>

            <p class="text-h6 mb-6">
              {{ trip.hero.subtitle }}
            </p>

            <div class="d-flex flex-wrap ga-2 mb-8">
              <v-chip
                v-for="badge in trip.hero.badges"
                :key="badge"
                color="primary"
                variant="tonal"
              >
                {{ badge }}
              </v-chip>
            </div>

            <div class="d-flex flex-wrap ga-4">
              <v-btn
                :href="trip.hero.primaryCta?.href"
                :color="trip.hero.primaryCta?.color"
                size="large"
              >
                <v-icon start>
                  {{ trip.hero.primaryCta?.prependIcon }}
                </v-icon>

                {{ trip.hero.primaryCta?.label }}
              </v-btn>

              <v-btn
                :href="trip.hero.secondaryCta?.href"
                variant="outlined"
                color="white"
                size="large"
              >
                <v-icon start>
                  {{ trip.hero.secondaryCta?.prependIcon }}
                </v-icon>

                {{ trip.hero.secondaryCta?.label }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- META STATS -->
    <v-container class="py-12">
      <v-row>
        <v-col cols="6" md="3">
          <v-card>
            <v-card-text>
              <div class="text-caption">Difficulty</div>
              <div class="text-h6">{{ trip.meta.difficulty }}</div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6" md="3">
          <v-card>
            <v-card-text>
              <div class="text-caption">Duration</div>
              <div class="text-h6">{{ trip.meta.duration }}</div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6" md="3">
          <v-card>
            <v-card-text>
              <div class="text-caption">Season</div>
              <div class="text-h6">{{ trip.meta.season }}</div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6" md="3">
          <v-card>
            <v-card-text>
              <div class="text-caption">Minimum Age</div>
              <div class="text-h6">{{ trip.meta.minimumAge }}+</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- CONTENT SECTIONS -->
    <v-container class="py-8">
      <section
        v-for="section in trip.sections"
        :key="section.id"
        class="mb-16"
      >
        <h2 class="text-h4 font-weight-bold mb-4">
          {{ section.heading }}
        </h2>

        <p
          v-if="section.body"
          class="text-body-1 mb-8"
        >
          {{ section.body }}
        </p>

        <v-row v-if="section.items">
          <v-col
            v-for="item in section.items"
            :key="item.title"
            cols="12"
            md="6"
          >
            <v-card height="100%">
              <v-card-text class="d-flex ga-4">
                <v-icon
                  size="36"
                  color="primary"
                >
                  {{ item.icon }}
                </v-icon>

                <div>
                  <div class="text-h6 mb-2">
                    {{ item.title }}
                  </div>

                  <div class="text-body-2">
                    {{ item.description }}
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- IMPORTANT NOTES -->
    <v-container class="pb-16">
      <v-alert
        type="warning"
        variant="tonal"
      >
        <div class="text-h6 mb-4">
          Important Notes
        </div>

        <ul class="pl-4">
          <li
            v-for="note in trip.importantNotes"
            :key="note"
            class="mb-2"
          >
            {{ note }}
          </li>
        </ul>
      </v-alert>
    </v-container>
  </div>
</template>

<style scoped>
.hero-section {
  background:
    linear-gradient(
      rgba(0,0,0,.45),
      rgba(0,0,0,.55)
    ),
    url('/images/irie-rafting-group-in-truckee.webp');

  background-size: cover;
  background-position: center;

  color: white;
}
</style>