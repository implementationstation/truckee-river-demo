<template>

  <v-container class="py-16">

    <v-row align="center">

      <!-- LEFT CONTENT -->
      <v-col cols="12" md="6">

        <!-- HEADLINE -->
        <h1 class="text-h2 font-weight-bold mb-4">
          Truckee River Rafting Adventures
        </h1>

        <v-chip class="mb-4" color="primary" variant="flat">
          Most Popular Truckee River Trip
        </v-chip>

        <!-- SUBHEAD (MORE SPECIFIC) -->
        <p class="text-h6 mb-4">
          Guided Class II–III whitewater rafting near Lake Tahoe.
        </p>

        <!-- QUICK FACTS (CRITICAL ADD) -->
        <p class="text-body-1 mb-6 text-medium-emphasis">
          3–4 hours • Ages 5+ • Perfect for families & first-timers
        </p>

        <!-- CTA (FIXED) -->
        <div class="d-flex ga-4">

          <v-btn
            color="primary"
            size="x-large"
            to="/trips/truckee"
          >
            View Trip Details
          </v-btn>

          <v-btn
            variant="outlined"
            size="x-large"
            to="/contact"
          >
            Ask a Question
          </v-btn>

        </div>

      </v-col>

      <!-- IMAGE -->
      <v-col cols="12" md="6">

        <NuxtImg
          src="/images/tahoe-trip.webp"
          alt="Truckee River rafting near Lake Tahoe"
          format="webp"
          quality="80"
          sizes="sm:100vw md:50vw"
          class="rounded-xl"
        />

      </v-col>

    </v-row>

  </v-container>

</template>