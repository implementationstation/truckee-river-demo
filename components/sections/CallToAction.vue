<script setup lang="ts">
/**
 * CallToAction.vue
 * A bold, full-width CTA section component.
 * Nuxt 4 + Vuetify 4 — all best practices applied.
 *
 * Props:
 *   headline      — Main heading text
 *   subline       — Supporting paragraph text
 *   primaryLabel  — Primary button label
 *   primaryTo     — Nuxt route (uses NuxtLink) OR external href for primary btn
 *   secondaryLabel — Optional ghost button label
 *   secondaryTo   — Nuxt route or href for secondary btn
 *   backgroundSrc — Optional hero image URL layered beneath the gradient
 *   stat          — Optional array of { value, label } trust badges
 *
 * Emits:
 *   primary-click   — when primary CTA is clicked
 *   secondary-click — when secondary CTA is clicked
 */

export interface CtaStat {
  value: string
  label: string
  icon?: string
}

const props = withDefaults(defineProps<{
  headline?: string
  subline?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
  backgroundSrc?: string
  stats?: CtaStat[]
}>(), {
  headline: 'Your Next Adventure Starts Here',
  subline: 'Handpicked destinations, unbeatable prices, and memories that last a lifetime. Let\'s get you somewhere extraordinary.',
  primaryLabel: 'Explore Trips',
  primaryTo: '/trips',
  secondaryLabel: 'Planning your Trip ',
  secondaryTo: '/how-it-works',
  stats: () => [
    { value: '10K+', label: 'Happy Travellers', icon: 'mdi-account-group' },
    { value: '120+', label: 'Destinations', icon: 'mdi-earth' },
    { value: '4.9★', label: 'Avg. Rating', icon: 'mdi-star-circle' },
  ],
})

const emit = defineEmits<{
  (e: 'primary-click'): void
  (e: 'secondary-click'): void
}>()

// Resolve whether a "to" string is internal (NuxtLink) or external (anchor)
function isExternal(to?: string) {
  return !!to && (to.startsWith('http') || to.startsWith('//'))
}
</script>

<template>
  <section class="cta-section" aria-labelledby="cta-headline">
    <!-- ── Background layer ─────────────────────────────────────── -->
    <div class="cta-section__bg" aria-hidden="true">
      <v-img
        v-if="backgroundSrc"
        :src="backgroundSrc"
        cover
        height="100%"
        class="cta-section__bg-img"
      />
      <div class="cta-section__gradient" />
      <!-- Decorative orbs -->
      <div class="cta-section__orb cta-section__orb--1" />
      <div class="cta-section__orb cta-section__orb--2" />
    </div>

    <!-- ── Content ──────────────────────────────────────────────── -->
    <v-container class="cta-section__content py-16">
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" lg="7" class="text-center">

          <!-- Eyebrow chip -->
          <v-chip
            color="primary"
            variant="tonal"
            prepend-icon="mdi-airplane"
            size="small"
            class="mb-5 cta-section__eyebrow"
          >
            Limited-Time Deals Available
          </v-chip>

          <!-- Headline -->
          <h2
            id="cta-headline"
            class="cta-section__headline text-h3 text-sm-h2 font-weight-black mb-5"
          >
            {{ headline }}
          </h2>

          <!-- Subline -->
          <p class="cta-section__subline text-body-1 text-medium-emphasis mb-10 mx-auto">
            {{ subline }}
          </p>

          <!-- ── Buttons ─────────────────────────────────────── -->
          <div class="d-flex flex-wrap justify-center gap-4 mb-14">
            <!-- Primary -->
            <v-btn
              v-if="primaryLabel"
              v-bind="isExternal(primaryTo)
                ? { href: primaryTo, target: '_blank', rel: 'noopener noreferrer' }
                : { to: primaryTo }"
              color="primary"
              variant="elevated"
              size="x-large"
              rounded="pill"
              :elevation="8"
              prepend-icon="mdi-rocket-launch"
              class="cta-section__btn-primary"
              @click="emit('primary-click')"
            >
              {{ primaryLabel }}
            </v-btn>

            <!-- Secondary -->
            <v-btn
              v-if="secondaryLabel"
              v-bind="isExternal(secondaryTo)
                ? { href: secondaryTo, target: '_blank', rel: 'noopener noreferrer' }
                : { to: secondaryTo }"
              variant="outlined"
              size="x-large"
              rounded="pill"
              color="white"
              class="cta-section__btn-secondary"
              append-icon="mdi-arrow-right"
              @click="emit('secondary-click')"
            >
              {{ secondaryLabel }}
            </v-btn>
          </div>

          <!-- ── Stats bar ───────────────────────────────────── -->
          <v-row
            v-if="stats?.length"
            justify="center"
            class="cta-section__stats"
          >
            <v-col
              v-for="(stat, i) in stats"
              :key="i"
              cols="auto"
              class="text-center px-6"
            >
              <v-icon
                v-if="stat.icon"
                :icon="stat.icon"
                color="primary"
                size="28"
                class="mb-1"
              />
              <div class="text-h5 font-weight-black text-white">
                {{ stat.value }}
              </div>
              <div class="text-caption text-medium-emphasis text-uppercase letter-spacing-wide">
                {{ stat.label }}
              </div>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
/* ── Section shell ──────────────────────────────────────────────────────── */
.cta-section {
  position: relative;
  overflow: hidden;
  background: rgb(var(--v-theme-surface));
  isolation: isolate;
}

/* ── Background layers ──────────────────────────────────────────────────── */
.cta-section__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.cta-section__bg-img {
  opacity: 0.18;
}

.cta-section__gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 80% 60% at 50% 40%,
    rgba(var(--v-theme-primary), 0.22) 0%,
    transparent 70%
  );
}

/* Decorative ambient orbs */
.cta-section__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.cta-section__orb--1 {
  width: 520px;
  height: 520px;
  top: -160px;
  left: -120px;
  background: radial-gradient(
    circle,
    rgba(var(--v-theme-primary), 0.18),
    transparent 70%
  );
}

.cta-section__orb--2 {
  width: 420px;
  height: 420px;
  bottom: -140px;
  right: -80px;
  background: radial-gradient(
    circle,
    rgba(var(--v-theme-secondary), 0.14),
    transparent 70%
  );
}

/* ── Content sits above bg layers ───────────────────────────────────────── */
.cta-section__content {
  position: relative;
  z-index: 1;
}

/* ── Eyebrow chip ───────────────────────────────────────────────────────── */
.cta-section__eyebrow {
  animation: cta-fade-up 0.6s ease both;
  animation-delay: 0.05s;
}

/* ── Headline ───────────────────────────────────────────────────────────── */
.cta-section__headline {
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.1;
  letter-spacing: -0.02em;
  max-width: 720px;
  margin-inline: auto;
  animation: cta-fade-up 0.6s ease both;
  animation-delay: 0.15s;
}

/* ── Subline ────────────────────────────────────────────────────────────── */
.cta-section__subline {
  max-width: 560px;
  line-height: 1.7;
  animation: cta-fade-up 0.6s ease both;
  animation-delay: 0.25s;
}

/* ── Primary button ─────────────────────────────────────────────────────── */
.cta-section__btn-primary {
  animation: cta-fade-up 0.6s ease both;
  animation-delay: 0.35s;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}

.cta-section__btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 32px rgba(var(--v-theme-primary), 0.45) !important;
}

/* ── Secondary button ───────────────────────────────────────────────────── */
.cta-section__btn-secondary {
  animation: cta-fade-up 0.6s ease both;
  animation-delay: 0.42s;
  border-color: rgba(255, 255, 255, 0.35) !important;
  backdrop-filter: blur(4px);
  transition: border-color 0.2s ease, background 0.2s ease !important;
}

.cta-section__btn-secondary:hover {
  border-color: rgba(255, 255, 255, 0.75) !important;
  background: rgba(255, 255, 255, 0.08) !important;
}

/* ── Stats divider lines ────────────────────────────────────────────────── */
.cta-section__stats > .v-col:not(:last-child) {
  border-right: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}

.letter-spacing-wide {
  letter-spacing: 0.08em;
}

/* ── Entrance animation ─────────────────────────────────────────────────── */
@keyframes cta-fade-up {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Reduced-motion override ────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .cta-section__eyebrow,
  .cta-section__headline,
  .cta-section__subline,
  .cta-section__btn-primary,
  .cta-section__btn-secondary {
    animation: none;
  }

  .cta-section__btn-primary:hover,
  .cta-section__btn-secondary:hover {
    transform: none;
  }
}
</style>
