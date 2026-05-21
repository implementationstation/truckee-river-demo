<template>

  <!--
  ========================
  HERO SECTION
  ========================
  -->

  <HeroSection />

  <!--
  ========================
  FEATURED TRIPS
  ========================
  -->

  <v-container class="py-16">

    <h2 class="text-h3 mb-10 text-center">
      Featured Adventures
    </h2>

    <v-row>

      <v-col cols="12" md="4">

        <TripCard
          title="Family Float Trips"
          description="Relaxed scenic rafting adventures for families."
          image="/images/family-trip.webp"
          link="/family-rafting"
        />

      </v-col>

      <v-col cols="12" md="4">

        <TripCard
          title="Whitewater Adventures"
          description="Exciting rapids and unforgettable memories."
          image="/images/california-whitewater.webp"
          link="/california-whitewater"
        />

      </v-col>

      <v-col cols="12" md="4">

        <TripCard
          title="Tahoe Guided Tours"
          description="Explore the Truckee River with local experts."
          image="/images/tahoe-trip.webp"
          link="/rafting-near-tahoe"
        />

      </v-col>

    </v-row>

  </v-container>

  <!--
  ========================
  TESTIMONIALS
  ========================
  -->

  <v-container class="py-16">

    <h2 class="text-h3 mb-10 text-center">
      What Guests Are Saying
    </h2>

    <v-row>

      <v-col cols="12" md="4">

        <TestimonialCard
          quote="One of the best Tahoe experiences we've ever had."
          author="Sarah M"
        />

      </v-col>

      <v-col cols="12" md="4">

        <TestimonialCard
          quote="Amazing guides and incredible scenery."
          author="Daniel R"
        />

      </v-col>

      <v-col cols="12" md="4">

        <TestimonialCard
          quote="Perfect family adventure for our kids."
          author="Ashley T"
        />

      </v-col>

    </v-row>

  </v-container>

  <!--
  ========================
  FAQ SECTION
  ========================
  -->

  <FAQSection />

  <!--
  ========================
  CTA SECTION
  ========================
  -->

  <CTASection />

</template>

<script setup>

/*
========================
SEO SECTION
========================
*/

useSeoMeta({

  title: 'Truckee River Rafting | Guided Tahoe Adventures',

  description: 'Experience guided rafting adventures near Tahoe with experienced Truckee River guides.',

  ogTitle: 'Truckee River Rafting',

  ogDescription: 'Northern California rafting adventures near Tahoe.'

})

</script>