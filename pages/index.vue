
<template>
  <div>
    
    <HeroHome/>
    <!-- <Ddday27Hero /><HeroHome/>
     
    <LandingFull />-->
  <PageShell>

      <!--
  ========================
  TRUST INDICATORS
  ========================
  -->

  <TrustBar />
    <Ddday27TripOverview />
    <v-container>
      <ReasonBlock />
    </v-container>
    <v-col cols="12" class="pa-3">
      <BasicCarouselGalleryHome />
      </v-col>
<!-- <SectionSplit
  eyebrow="HALF DAY RIVER RAFTING"
  title="Boca to Floriston Gorge Run (4h)"
  :paragraphs="[
    'Experience the most popular rafting section near Tahoe on a guided half-day adventure through fun Class II-III rapids, calm scenic stretches, and beautiful Sierra mountain views',
    'This tour is perfect for first-timers, groups & families alike. Y',
    
  ]"
  image="/images/l-guided-river-rafting-trips-tahoe.webp"
/>  -->

  <!-- <Ddday27QuickFacts /> -->
  
  




  
    <!--INFO CARD GRID HERE< -->
    <!-- <SectionBlock
      v-for="section in page.sections"
      :key="section.title"
      :label="section.label"
      :title="section.title"
      :intro="section.intro"
    >
      <InfoCardGrid :cards="section.cards" />
      <v-col cols="12" md="8">
        
        <v-img src="/images/l-exciting-truckee-river-rafting-experiences.webp" />
      </v-col>
    </SectionBlock> -->
    <!--
  ========================
  WHY CHOOSE US
  ========================
    -->
    

    

<!--TESTIMONIALS/REVIEWS-->
   <v-container>
    <TestimonialGrid :items="testimonials"></TestimonialGrid>
   </v-container>
    
  </PageShell>
  <!--CALL TO ACTION< CUNTS-->
  <Ddday27CTA />
  </div>
</template>

<script setup lang="ts">
import { truckeeHomePage as page } from '~/data/pages/truckeeHome';
import { testimonials } from '~/data/testimonials';
import TestimonialGrid from '~/components/sections/TestimonialGrid.vue';
import HeroHome from '~/components/hero/HeroHome.vue';
import ReasonBlock from '~/components/shared/ReasonBlock.vue';
import TrustBar from '~/components/Snazzy/TrustBar.vue';
import BasicCarouselGalleryHome from '~/components/ddday-27/BasicCarouselGalleryHome.vue';

// useSeoMeta({
//   title: page.seo.title,
//   description: page.seo.description,
//   ogTitle: page.seo.title,
//   ogDescription: page.seo.description,
// })

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

// useSeoMeta({
//   title: 'Your Page Title - Up to ~60 characters',
//   description: 'A compelling 150-160 character description that appears in search results. Include your main keywords naturally.',
//   ogTitle: 'Title for social shares',
//   ogDescription: 'Description for social shares',
//   ogImage: 'https://your-site.com/og-image.jpg', // Absolute URL, ideally 1200x630
//   ogUrl: 'https://your-site.com/current-page',
//   twitterCard: 'summary_large_image',
//   // Add more as needed
// })
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