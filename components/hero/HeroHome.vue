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

<template><div class="trip-page">
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
            <!-- EYEBROW -->
            <div class="text-overline text-white mb-5 tracking eyebrow">
              Guided Whitewater Experiences
            </div>
            <!--TITLE-->
            <h1 class="hero-title mb-6">
              Truckee River Whitewater Rafting Tours
            </h1>
            <!--SUBTITLE-->
            <p class="hero-subtitle mb-8">
              We offer trips down the truckee river gorge twice daily. <br />With over 30 years of local experience we know how to have fun and do it safely.  
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
                href="https://book.singenuity.com/338/activity/details/1452/rates"
              >
                <v-icon start>
                  mdi-waves-arrow-right
                </v-icon>

                Reserve Your Raft
              </v-btn>

              <!-- <v-btn
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
              </v-btn> -->
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <!-- =========================
    FLOATING META CARDS
    ========================== -->
    <!-- <v-container class="meta-wrapper">
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
    </v-container> -->
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
/*CHANGED */
  background:
    url('/images/compressed-irie/guided-river-rafting-truckee-river.webp');

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
      rgba(9, 16, 24, 0.5),
      rgba(17, 37, 54, 0.4)
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


<!-- 
[ktag]
EXPLANATION

This CSS shorthand:

```css
padding: 28px clamp(20px, 5vw, 72px);
```

means:

```css
padding-top: 28px;
padding-bottom: 28px;
padding-left: clamp(20px, 5vw, 72px);
padding-right: clamp(20px, 5vw, 72px);
```

### How `clamp()` works

```css
clamp(minimum, preferred, maximum)
```

So:

```css
clamp(20px, 5vw, 72px)
```

means:

* Never smaller than **20px**
* Prefer **5vw** (5% of the viewport width)
* Never larger than **72px**

### Visual illustration

```
┌─────────────────────────────────────┐
│                                     │ ← 28px top padding
│   ← variable horizontal padding →   │
│   Content                           │
│   Content                           │
│   Content                           │
│                                     │ ← 28px bottom padding
└─────────────────────────────────────┘
```

### Example values

| Viewport Width | 5vw   | Result                 |
| -------------- | ----- | ---------------------- |
| 320px          | 16px  | 20px (minimum applies) |
| 600px          | 30px  | 30px                   |
| 1000px         | 50px  | 50px                   |
| 1440px         | 72px  | 72px                   |
| 2000px         | 100px | 72px (maximum applies) |

### In plain English

* Top and bottom padding are always **28px**.
* Left and right padding grow with screen size.
* On very small screens, they stay at **20px**.
* On medium screens, they are **5% of the viewport width**.
* On very large screens, they stop growing at **72px**.

For example:

**Mobile (320px wide)**

```
|--20px--[ Content ]--20px--|
```

**Tablet (800px wide)**

```
|--------40px--------[ Content ]--------40px--------|
```

**Large desktop (1800px wide)**

```
|--------------72px--------------[ Content ]--------------72px--------------|
```

This pattern is commonly used for responsive layouts because it keeps content from touching the screen edges on mobile while preventing excessively large margins on wide monitors. -->
