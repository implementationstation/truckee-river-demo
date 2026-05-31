<template>

  <!--
  ========================
  HERO SECTION
  ========================
  -->

   

  <!-- <SectionsHeroPrimary 
    eyebrow="TAHOE TRUCKEE RAFTING 2026"
    title="Tahoe Local Guides: Proper River Know-how"
    subtitle="Experience the thrill of the rapids on the Truckee River with IRIE Rafting Company. Nestled in the heart of the stunning Lake Tahoe area, our whitewater rafting trips on the Truckee River promise half-day adventures that are perfect for families and thrill-seekers alike."
    primary-cta="Book Now"
    secondary-cta="Learn More"
    /> -->
    <HeroHappy></HeroHappy>
  <!-- <HeroSection /> -->

  <!--
  ========================
  FEATURED TRIPS
  ========================
  -->


  <v-container class="py-16">

    <h2 class="text-h3 mb-6 text-center">
      The Tahoe Based Whitewater Raft Outfitter
    </h2>
    <p style="font-weight: bold" class="text-subtitle-1 mb-10 text-center">Class II–III rapids • 3–4 hours • Perfect for families and first-timers</p>
    <p class="text-center mb-10 text-subtitle-1">
    We offer two guided whitewater rafting trips down the Truckee River daily throughout the summer, so you can choose the perfect time to dive into the adventure. Whether you’re a seasoned rafter or a first-timer, our expert guides ensure a safe and fantastic experience for everyone. Don’t miss out on this must-do adventure while exploring the Truckee Tahoe area! Embrace the rush, make memories, and splash into fun!
  </p>

  <v-row justify="center">

    <v-col cols="12" md="6">

      <!-- <TripCard :trip="truckeeTrip" /> -->
       <TripCard
          title="Truckee River Half Day “Boca Run”"
          description="AKA - ‘Floriston Gorge” Class II-III. This popular guided river trip is offered twice daily, all summer, and is very close to Truckee & North Lake Tahoe. A bucket list adventure for visitors to the area and long time locals alike. This section of the Truckee River takes you through beautiful scenic river canyons and rich history. The rapids in this section progresses from small riffles to class II canyons. The journey ends with exhilarating Class III rapids. "
          image="/images/family-river-rafting-experiences-on-truckee-river.webp"
          link="/trips/truckee-river-half-day-guided-river-rafting"
          duration="3–4 hours"
          difficulty="Class II–III"
          :price="120"
          badge="Most Popular"
        />

    </v-col>

  </v-row>

  <div class="text-center mt-6">
    <v-btn color="primary" size="large" to="/contact">
      Contact Us Now
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
import ImportantAdminInfo from '~/components/general/importantAdminInfo.vue';
import RaftingTripPricingSection from '~/components/general/RaftingTripPricingSection.vue';
import HeroHappy from '~/components/sections/HeroHappy.vue';


// USE ONLY IF YOU WANT DYNAMIC INFO COMING 
const truckeeTrip = {
  id: 'truckee',
  name: 'Truckee River Half Day',
  river: 'Truckee River',
  difficulty: 'Moderate',
  duration: '3–4 hours',
  price: 120,
  image: '/images/unforgettable-family-river-rafting-tours-in-tahoe.webp',
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