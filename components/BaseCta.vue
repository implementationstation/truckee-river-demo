<script setup lang="ts">
type CtaVariant = 'book-trip' | 'buy-photos' | 'discover'

// interface Props {
//   variant?: CtaVariant
// }
//se CTAs often appear on pages with unique destinations, I'd allow title overrides:
interface Props {
  variant?: CtaVariant
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'discover'
})

const variants = {
  'book-trip': {
    eyebrow: 'Guided Whitewater Rafting',
    title: 'Ready for Your Next Adventure?',
    description:
      'For the best experience rafting on the Truckee River, come with I.R.I.E. We handle the adversity ov the river while you focus on the experience with your squad.',
    primaryLabel: 'Get me on a Raft',
    primaryTo: '/trips',
    secondaryLabel: 'Talk To Us',
    secondaryTo: '/contact',
    icon: 'mdi-airplane'
  },

  'buy-photos': {
    eyebrow: 'Custom Group Rafting Photos',
    title: 'Take your memories home with you',
    description:
      'Purchase professionally edited images from your tour and relive the experience for years to come. Speak to us about purchasing a custom set',
    primaryLabel: 'Buy Photos',
    primaryTo: '/gallery',
    secondaryLabel: 'View Collection',
    secondaryTo: '/gallery',
    icon: 'mdi-camera'
  },

  discover: {
    eyebrow: 'Explore Destinations',
    title: 'Discover Your Next Adventure',
    description:
      'Browse upcoming tours, photography workshops, destination guides and travel inspiration.',
    primaryLabel: 'Explore Trips',
    primaryTo: '/trips',
    secondaryLabel: 'Learn More',
    secondaryTo: '/destinations',
    icon: 'mdi-compass'
  }
} as const

const content = computed(() => variants[props.variant])
</script>

<template>
  <section
    class="py-12 py-md-16"
    :aria-labelledby="`cta-${variant}`"
  >
    <v-container>
      <v-card
        rounded="xl"
        elevation="0"
        color="surface"
        border
      >
        <v-row
          align="center"
          justify="space-between"
          class="pa-6 pa-md-10"
        >
          <v-col
            cols="12"
            md="8"
          >
            <v-chip
              :prepend-icon="content.icon"
              color="primary"
              variant="tonal"
              class="mb-4"
            >
              {{ content.eyebrow }}
            </v-chip>

            <h2
              :id="`cta-${variant}`"
              class="text-h4 text-md-h3 font-weight-bold mb-3"
            >
              {{ content.title }}
            </h2>

            <p
              class="text-body-1 text-medium-emphasis mb-0"
              style="max-width: 700px;"
            >
              {{ content.description }}
            </p>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="text-md-right"
          >
            <div
              class="d-flex flex-column flex-sm-row flex-md-column ga-3 justify-end"
            >
              <v-btn
                color="primary"
                size="large"
                :to="content.primaryTo"
              >
                {{ content.primaryLabel }}
              </v-btn>

              <v-btn
                variant="outlined"
                size="large"
                :to="content.secondaryTo"
              >
                {{ content.secondaryLabel }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </section>
</template>
<!-- USAGE
<BaseCta variant="discover" />
<BaseCta variant="buy-photos" />
<BaseCta variant="book-trip" /> 


USAGE 2
<BaseCta
  variant="discover"
>
  <template #media>
    <v-img
      src="/images/iceland-aurora.webp"
      cover
      height="100%"
    />
  </template>
</BaseCta>



-->