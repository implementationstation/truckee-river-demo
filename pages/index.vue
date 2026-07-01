
<template>
  <div>
    <HeroHome/>
    
    <PageShell>
    <!--  ITEM 1 Removed jun30 [ktag]<TrustBar /> -->
    <Ddday27TripOverview />
    <v-container>
      <ReasonBlock />
    </v-container>
    <v-col cols="12" class="pa-3">
      <BasicCarouselGalleryHome />
    </v-col>
    <v-col cols="12">
      <OfficeShowcaseBentoBox :slides="officeSlides" />
    </v-col>
   <v-container>
    <TestimonialGrid :items="testimonials"></TestimonialGrid>
   </v-container>
    
  </PageShell>
  <!--CALL TO ACTION< CUNTS-->
  <Ddday27CTA />
  </div>
</template>

<script setup lang="ts">
import { testimonials } from '~/data/testimonials';
import { officeSlides } from '~/data/ddday-27/OfficeMeeting';
import TestimonialGrid from '~/components/sections/TestimonialGrid.vue';
import HeroHome from '~/components/hero/HeroHome.vue';
import ReasonBlock from '~/components/shared/ReasonBlock.vue';
import BasicCarouselGalleryHome from '~/components/ddday-27/BasicCarouselGalleryHome.vue';
import OfficeShowcaseBentoBox from '~/components/ddday-27/OfficeShowcaseBentoBox.vue';

useSeoMeta({
  title: 'Truckee Tahoe Guided Whitewater Rapid Rafting Trips',
  description: 'Experience the most popular rafting section near Tahoe on a guided half-day adventure through fun Class II-III rapids, calm scenic stretches, and beautiful Sierra mountain views.',
  ogTitle: 'Truckee Tahoe Guided Whitewater Rapid Rafting Trips',
  ogDescription: 'Experience the most popular rafting section near Tahoe on a guided half-day adventure through fun Class II-III rapids, calm scenic stretches, and beautiful Sierra mountain views.',
  ogImage: 'https://www.raftirie.com/images/compressed-irie/befunky_2026-4-5_5-52-11.webp', // Absolute URL, ideally 1200x630
  ogUrl: 'https://raftirie.com',
  twitterCard: 'summary_large_image',
  // Add more as needed
})
</script>

<style scoped>
.hero {
  padding: 48px 0 72px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.7;
  margin-bottom: 16px;
}

h1 {
  max-width: 920px;
  font-size: clamp(3rem, 8vw, 6.5rem);
  line-height: 0.95;
}

.hero p {
  margin-top: 24px;
  max-width: 680px;
  font-size: 1.2rem;
  line-height: 1.7;
  opacity: 0.85;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 36px;
}
</style>