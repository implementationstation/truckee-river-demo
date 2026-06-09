<script setup lang="ts">
/**
 * TripCard.vue
 * Displays a row of 3 trip cards using Vuetify 4 components.
 * Nuxt 4 + Vuetify 4 — all best practices applied.
 *
 * Props:
 *   trips  — Array of TripItem (up to 3 recommended)
 *
 * Emits:
 *   book   — { trip: TripItem }  when the user clicks "Book Now"
 *   save   — { trip: TripItem }  when the user toggles the favourite heart
 */

export interface TripItem {
  id: string | number
  title: string
  subtitle?: string
  location: string
  image: string          // URL or /public path
  price: number          // per person, base currency
  currency?: string      // default 'USD'
  duration: number       // nights
  rating?: number        // 0–5
  reviewCount?: number
  tags?: string[]        // e.g. ['Beach', 'Family', 'All-inclusive']
  isFeatured?: boolean
  isSoldOut?: boolean
}

const props = withDefaults(defineProps<{
  trips: TripItem[]
}>(), {
  trips: () => [],
})

const emit = defineEmits<{
  (e: 'book', payload: { trip: TripItem }): void
  (e: 'save', payload: { trip: TripItem }): void
}>()

// ── Local reactive state ───────────────────────────────────────────────────
const saved = ref<Set<string | number>>(new Set())

// ── Helpers ────────────────────────────────────────────────────────────────
function formatPrice(trip: TripItem) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: trip.currency ?? 'USD',
    maximumFractionDigits: 0,
  }).format(trip.price)
}

function toggleSave(trip: TripItem) {
  if (saved.value.has(trip.id)) {
    saved.value.delete(trip.id)
  } else {
    saved.value.add(trip.id)
  }
  emit('save', { trip })
}

function isSaved(id: string | number) {
  return saved.value.has(id)
}
</script>

<template>
  <v-container fluid class="pa-4">
    <v-row justify="center" align="stretch">
      <v-col
        v-for="trip in trips"
        :key="trip.id"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <!-- ── Card ─────────────────────────────────────────────── -->
        <v-card
          :class="['trip-card', { 'trip-card--sold-out': trip.isSoldOut }]"
          :elevation="4"
          rounded="xl"
          width="100%"
        >
          <!-- ── Hero Image ──────────────────────────────────── -->
          <v-img
            :src="trip.image"
            :alt="trip.title"
            height="220"
            cover
            class="trip-card__image"
          >
            <!-- Overlay gradient -->
            <div class="trip-card__image-overlay" aria-hidden="true" />

            <!-- Top badges row -->
            <div class="trip-card__badges">
              <v-chip
                v-if="trip.isFeatured"
                color="amber-darken-2"
                size="small"
                prepend-icon="mdi-star"
                variant="elevated"
              >
                Featured
              </v-chip>
              <v-chip
                v-if="trip.isSoldOut"
                color="error"
                size="small"
                variant="elevated"
              >
                Sold Out
              </v-chip>
            </div>

            <!-- Save / favourite button -->
            <v-btn
              :icon="isSaved(trip.id) ? 'mdi-heart' : 'mdi-heart-outline'"
              :color="isSaved(trip.id) ? 'error' : 'white'"
              :aria-label="isSaved(trip.id) ? 'Remove from saved' : 'Save trip'"
              variant="tonal"
              size="small"
              class="trip-card__save-btn"
              @click.stop="toggleSave(trip)"
            />
          </v-img>

          <!-- ── Card Content ────────────────────────────────── -->
          <v-card-item>
            <!-- Location chip -->
            <template #prepend>
              <v-icon color="primary" icon="mdi-map-marker" size="18" />
            </template>

            <v-card-subtitle class="text-caption font-weight-medium text-primary">
              {{ trip.location }}
            </v-card-subtitle>

            <v-card-title class="trip-card__title text-h6 font-weight-bold">
              {{ trip.title }}
            </v-card-title>

            <p
              v-if="trip.subtitle"
              class="text-body-2 text-medium-emphasis mt-1 mb-0"
            >
              {{ trip.subtitle }}
            </p>
          </v-card-item>

          <!-- Tags -->
          <v-card-text v-if="trip.tags?.length" class="pt-0 pb-2">
            <v-chip-group aria-label="Trip tags">
              <v-chip
                v-for="tag in trip.tags"
                :key="tag"
                size="x-small"
                variant="tonal"
                color="secondary"
              >
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <!-- Rating + Duration -->
          <v-card-text class="pt-0 pb-2">
            <v-row no-gutters align="center">
              <!-- Rating -->
              <v-col v-if="trip.rating !== undefined" cols="auto">
                <v-rating
                  :model-value="trip.rating"
                  color="amber-darken-1"
                  half-increments
                  readonly
                  density="compact"
                  size="16"
                />
                <span
                  v-if="trip.reviewCount"
                  class="text-caption text-medium-emphasis ml-1"
                >
                  ({{ trip.reviewCount.toLocaleString() }})
                </span>
              </v-col>

              <v-spacer />

              <!-- Duration -->
              <v-col cols="auto">
                <v-icon icon="mdi-weather-night" size="16" color="medium-emphasis" />
                <span class="text-caption text-medium-emphasis ml-1">
                  {{ trip.duration }} night{{ trip.duration !== 1 ? 's' : '' }}
                </span>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider />

          <!-- Price + CTA -->
          <v-card-actions class="pa-4">
            <div class="d-flex flex-column">
              <span class="text-caption text-medium-emphasis">From</span>
              <span class="text-h6 font-weight-bold text-primary">
                {{ formatPrice(trip) }}
              </span>
              <span class="text-caption text-medium-emphasis">per person</span>
            </div>

            <v-spacer />

            <v-btn
              :disabled="trip.isSoldOut"
              color="primary"
              variant="elevated"
              rounded="lg"
              prepend-icon="mdi-airplane-takeoff"
              @click="emit('book', { trip })"
            >
              {{ trip.isSoldOut ? 'Unavailable' : 'Book Now' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* ── Card shell ─────────────────────────────────────────────────────────── */
.trip-card {
  display: flex;
  flex-direction: column;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.trip-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18) !important;
}

.trip-card--sold-out {
  opacity: 0.72;
  filter: grayscale(35%);
}

/* ── Image layer ────────────────────────────────────────────────────────── */
.trip-card__image {
  position: relative;
}

.trip-card__image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.28) 0%,
    transparent 50%
  );
  pointer-events: none;
}

/* ── Badge cluster (top-left) ───────────────────────────────────────────── */
.trip-card__badges {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

/* ── Save button (top-right) ────────────────────────────────────────────── */
.trip-card__save-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* ── Title clamp ────────────────────────────────────────────────────────── */
.trip-card__title {
  white-space: normal;
  overflow-wrap: break-word;
  line-height: 1.25;
}
</style>
