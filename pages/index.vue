
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
<SectionSplit
  eyebrow="TRUCKEE RIVER RAFTING HALF DAY TOURS"
  title="Boca to Floriston Gorge Run (4h)"
  :paragraphs="[
    'Experience the most popular rafting section near Tahoe on a guided half-day adventure through fun Class II-III rapids, calm scenic stretches, and beautiful Sierra mountain views',
    'This tour is perfect for first-timers, groups & families alike. ',
    'You will arrive at our offices along the Truckee River, and from there we transport you, get you set up to hit the river, and take you back to the offices. This is about 4 hours in total.'
  ]"
  image="/images/l-guided-river-rafting-trips-tahoe.webp"
/> 
  <Ddday27TripOverview />
  <Ddday27QuickFacts />
  
  




  
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
    <v-container>
      <ReasonBlock />
    </v-container>

    

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
import { truckeeHomePage as page } from '~/data/pages/truckeeHome'
import InfoCardGrid from '~/components/page/InfoCardGrid.vue';
 import SectionBlock from '~/components/page/SectionBlock.vue';
//import CallToAction from '~/components/sections/CallToAction.vue';
import { testimonials } from '~/data/testimonials';
import BaseCta from '~/components/BaseCta.vue';
import TestimonialGrid from '~/components/sections/TestimonialGrid.vue';
import HeroHome from '~/components/hero/HeroHome.vue';
import WhyChooseUs from '~/components/about/WhyChooseUs.vue';
import ReasonBlock from '~/components/shared/ReasonBlock.vue';
import SectionSplit from '~/components/shared/SectionSplit.vue';
import WhyGrid from '~/components/WhyGrid.vue';
import TrustBar from '~/components/Snazzy/TrustBar.vue';
import TripCard from '~/components/trip/TripCard.vue';
import StickyBookingCTA from '~/components/Snazzy/StickyBookingCTA.vue';
import CTA from '~/components/shared/CTA.vue';
import Landing1 from '~/components/ddday-27/hero/landing-1.vue';
import LandingFull from '~/components/ddday-27/landing-full.vue';

useSeoMeta({
  title: page.seo.title,
  description: page.seo.description,
  ogTitle: page.seo.title,
  ogDescription: page.seo.description,
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