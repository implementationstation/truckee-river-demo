<template>

  <!--
  ========================
  HERO SECTION
  ========================
  -->

  <SectionsHeroPrimary 
    eyebrow="TAHOE SUMMER 2026"
    title="The river rafting trips you hear about from your friends is available with us all year round."
    subtitle="Strong Ambience, Skilled Guides & unforgettable experiences for all."
    primary-cta="Get In Now"
    secondary-cta="View The Prices"
    />
  <!-- <HeroSection /> -->

  <!--
  ========================
  FEATURED TRIPS
  ========================
  -->


  <v-container class="py-16">

    <h2 class="text-h3 mb-6 text-center">
      The IRIE River Rafting Experience
    </h2>

    <p class="text-center mb-10 text-subtitle-1">
    Class II–III rapids • 3–4 hours • Perfect for families and first-timers
  </p>

  <v-row justify="center">

    <v-col cols="12" md="6">

      <!-- <TripCard :trip="truckeeTrip" /> -->
       <TripCard
          title="Truckee River Gorge Run Half Day"
          description="Summertime rafting trips through the Truckee River Gorge with exciting Class II-III rapids. Scenic rafting trip perfect for families and beginners."
          image="/images/l-exciting-truckee-river-rafting-experiences.webp"
          link="/trips/truckee"
          duration="3–4 hours"
          difficulty="Class II–III"
          :price="120"
          badge="Most Popular"
        />

    </v-col>

  </v-row>

  <div class="text-center mt-6">
    <v-btn color="primary" size="large" to="/trips/truckee">
      View Trip Details
    </v-btn>
  </div>


    <!-- <v-row>

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

    </v-row> -->

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

  <!-- <FAQSection /> -->

  <!--
  ========================
  CTA SECTION
  ========================
  -->

  <CTASection />

</template>

<script setup lang="ts">

// USE ONLY IF YOU WANT DYNAMIC INFO COMING 
const truckeeTrip = {
  id: 'truckee',
  name: 'Truckee River Half Day',
  river: 'Truckee River',
  difficulty: 'Moderate',
  duration: '3–4 hours',
  price: 120,
  image: '/images/l-family-guided-rafting-on-truckee-river.webp',
  description: 'Guided rafting near Lake Tahoe.'
}
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