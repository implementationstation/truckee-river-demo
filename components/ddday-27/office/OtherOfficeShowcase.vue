<template>
    <v-card
      class="overflow-hidden rounded-xl"
      elevation="8"
      color="surface"
    >
      <v-row no-gutters>

        <!-- Left Images -->
        <v-col
          cols="12"
          md="6"
        >
          <v-window
            v-model="window"
            show-arrows
            class="fill-height"
            cycle
          >
            <v-window-item
              v-for="(slide, i) in slides"
              :key="i"
              :value="i"
            >
              <v-img
                :src="slide.image"
                height="520"
                cover
                class="bg-grey-darken-3"
              >
                <div class="image-overlay pa-8 d-flex flex-column justify-end fill-height">
                  <div class="text-h4 font-weight-bold text-white mb-2">
                    {{ slide.title }}
                  </div>

                  <div class="text-body-1 text-grey-lighten-2">
                    {{ slide.subtitle }}
                  </div>
                </div>
              </v-img>
            </v-window-item>
          </v-window>
        </v-col>

        <!-- Right Content -->
        <v-col
          cols="12"
          md="6"
          class="d-flex"
        >
          <div class="pa-8 pa-md-10 w-100">

            <v-chip
              color="primary"
              variant="flat"
              class="mb-4"
            >
              Meeting Location
            </v-chip>

            <h2 class="text-h3 font-weight-bold mb-4">
              Start Your Adventure
              Before You Reach the River
            </h2>

            <p class="text-body-1 text-medium-emphasis mb-8">
              Unlike many outfitters that simply meet in a parking lot,
              our dedicated rafting headquarters gives you a comfortable,
              organized place to check in, meet your guide, and prepare
              for your day on the river.
            </p>

            <v-window
              v-model="window"
              class="mb-8"
              touch
            >
              <v-window-item
                v-for="(slide, i) in slides"
                :key="i"
                :value="i"
              >
                <v-list lines="two" density="comfortable">

                  <v-list-item
                    v-for="feature in slide.features"
                    :key="feature.title"
                  >
                    <template #prepend>
                      <v-avatar
                        color="primary"
                        variant="tonal"
                      >
                        <v-icon>
                          {{ feature.icon }}
                        </v-icon>
                      </v-avatar>
                    </template>

                    <v-list-item-title class="font-weight-bold">
                      {{ feature.title }}
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      {{ feature.text }}
                    </v-list-item-subtitle>

                  </v-list-item>

                </v-list>
              </v-window-item>
            </v-window>

            <v-divider class="mb-6" />

            <div class="d-flex flex-wrap ga-3 mb-8">

              <v-chip
                prepend-icon="mdi-shield-car"
                color="green"
                variant="tonal"
              >
                Secure Parking
              </v-chip>

              <v-chip
                prepend-icon="mdi-map-marker"
                color="blue"
                variant="tonal"
              >
                Easy to Find
              </v-chip>

              <v-chip
                prepend-icon="mdi-account-group"
                color="orange"
                variant="tonal"
              >
                Group Meeting Point
              </v-chip>

              <v-chip
                prepend-icon="mdi-sofa"
                color="purple"
                variant="tonal"
              >
                Comfortable Lounge
              </v-chip>

            </div>

            <div class="d-flex flex-wrap ga-4">

              <v-btn
                color="primary"
                size="large"
                rounded="xl"
                prepend-icon="mdi-calendar-check"
              >
                Book Your Trip
              </v-btn>

              <v-btn
                variant="outlined"
                size="large"
                rounded="xl"
                prepend-icon="mdi-map"
              >
                View Directions
              </v-btn>

            </div>

          </div>
        </v-col>

      </v-row>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const window = ref(0)

const slides = [
  {
    title: 'Private Secure Parking',
    subtitle: 'Leave your vehicle with confidence while you enjoy your rafting adventure.',
    image: '/images/office/parking.jpg',
    features: [
      {
        icon: 'mdi-shield-car',
        title: 'Secure Parking',
        text: 'Dedicated private parking available for guests.'
      },
      {
        icon: 'mdi-cctv',
        title: 'Peace of Mind',
        text: 'Park once and focus on your adventure.'
      },
      {
        icon: 'mdi-walk',
        title: 'Short Walk',
        text: 'Simple check-in just steps away.'
      }
    ]
  },
  {
    title: 'Comfortable Check-In',
    subtitle: 'Relax indoors before your trip begins.',
    image: '/images/office/lounge.jpg',
    features: [
      {
        icon: 'mdi-sofa',
        title: 'Comfortable Waiting Area',
        text: 'Meet your group in a clean, welcoming space.'
      },
      {
        icon: 'mdi-coffee',
        title: 'Refreshments',
        text: 'Grab a drink while everyone arrives.'
      },
      {
        icon: 'mdi-account-group',
        title: 'Meet Your Guide',
        text: 'A relaxed place for trip introductions.'
      }
    ]
  },
  {
    title: 'Professional Headquarters',
    subtitle: 'A dedicated rafting office designed for guests.',
    image: '/images/office/front.jpg',
    features: [
      {
        icon: 'mdi-map-marker',
        title: 'Easy to Find',
        text: 'Convenient location with clear signage.'
      },
      {
        icon: 'mdi-toilet',
        title: 'Restrooms',
        text: 'Facilities available before departure.'
      },
      {
        icon: 'mdi-check-circle',
        title: 'Fast Check-In',
        text: 'Quick, organized start to your adventure.'
      }
    ]
  }
]
</script>

<style scoped>
.image-overlay {
  background: linear-gradient(
    transparent,
    rgba(0,0,0,.65)
  );
}

.v-card {
  border: 1px solid rgba(255,255,255,.06);
}

.v-btn {
  text-transform: none;
}

h2 {
  line-height: 1.15;
}
</style>