<template>
  <section class="hero-wrapper">
    <v-img
      :src="backgroundImage"
      class="hero-image"
      cover
      gradient="to bottom, rgba(0,0,0,.35), rgba(0,0,0,.65)"
    >
      <v-container class="fill-height">
        <v-row
          class="fill-height align-center"
        >
          <!-- LEFT CONTENT -->
          <v-col
            cols="12"
            md="7"
            class="text-white"
          >
            <!-- EYEBROW -->
            <div class="hero-eyebrow mb-4">
              {{ eyebrow }}
            </div>

            <!-- HEADLINE -->
            <h1 class="hero-title mb-6">
              {{ title }}
            </h1>

            <!-- SUBTEXT -->
            <p class="hero-subtitle mb-8">
              {{ subtitle }}
            </p>

            <!-- CTA BUTTONS -->
            <div class="d-flex flex-wrap ga-4">
              <v-btn
                size="x-large"
                color="white"
                rounded="xl"
                class="text-black font-weight-bold"
                elevation="2"
              >
                {{ primaryCta }}
              </v-btn>

              <v-btn
                size="x-large"
                variant="outlined"
                color="white"
                rounded="xl"
              >
                {{ secondaryCta }}
              </v-btn>
            </div>

            <!-- STATS -->
            <div class="hero-stats mt-12">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="hero-stat"
              >
                <div class="hero-stat-value">
                  {{ stat.value }}
                </div>

                <div class="hero-stat-label">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </v-col>

          <!-- RIGHT CONTENT -->
          <v-col
            cols="12"
            md="5"
            class="d-none d-md-flex justify-center"
          >
            <v-sheet
              class="hero-card pa-6"
              rounded="xl"
              elevation="24"
            >
              <v-img
                :src="cardImage"
                height="320"
                cover
                rounded="lg"
              />

              <div class="mt-4">
                <div class="text-overline text-medium-emphasis">
                  Floriston Gorge Boca Run II-III
                </div>

                <div class="text-h5 font-weight-bold mt-2">
                  Truckee River Half Day Guided Rafting
                </div>

                <div class="text-body-1 mt-3 text-medium-emphasis">
                  Spring through September 2025: This section of the Truckee River takes you through beautiful scenic river canyons and rich history. The rapids in this section progresses from small riffles to class II canyons.
                </div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: 'NORTHERN CALIFORNIA RAFTING'
  },

  title: {
    type: String,
    default: 'Adventure that actually feels alive.'
  },

  subtitle: {
    type: String,
    default:
      'Premium Truckee River rafting experiences designed for families, thrill seekers, and unforgettable summer days.'
  },

  primaryCta: {
    type: String,
    default: 'Book Your Trip'
  },

  secondaryCta: {
    type: String,
    default: 'Explore Routes'
  },

  backgroundImage: {
    type: String,
    default:
    '/images/l-california-whitewater-rafting.webp' 
  },

  cardImage: {
    type: String,
    default:
      '/images/l-bossmoss-rapids-whitewater-rafting-tours-truckee.webp'
  },

  stats: {
    type: Array,
    default: () => [
      {
        value: '4.6★ (65 reviews)',
        label: 'Average Rating'
      },
      {
        value: '4200+',
        label: 'Happy Rafters'
      },
      {
        value: '18+ Years',
        label: 'River Experience'
      }
    ]
  }
})
</script>

<style scoped>
.hero-wrapper {
  position: relative;
}

.hero-image {
  min-height: 92vh;
}

.hero-eyebrow {
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  opacity: 0.85;
}

.hero-title {
  font-size: clamp(3rem, 7vw, 6rem);
  line-height: 0.95;
  font-weight: 900;
  max-width: 900px;
}

.hero-subtitle {
  font-size: 1.15rem;
  line-height: 1.8;
  max-width: 700px;
  opacity: 0.92;
}

.hero-card {
  width: 100%;
  max-width: 420px;
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.92);
}

.hero-stats {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
}

.hero-stat-value {
  font-size: 1.7rem;
  font-weight: 800;
}

.hero-stat-label {
  opacity: 0.75;
  margin-top: 0.2rem;
}
</style>