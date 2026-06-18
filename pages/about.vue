<script setup lang="ts">
//import AboutHero from '~/components/about/AboutHero.vue'
import HeroAbout from '~/components/hero/HeroAbout.vue'
import GuideStory from '~/components/about/GuideStory.vue'
import ValuesGrid from '~/components/about/ValuesGrid.vue'
import WhyChooseUs from '~/components/about/WhyChooseUs.vue'
import BookingCTA from '~/components/shared/BookingCTA.vue'

import PageShell from '~/components/page/PageShell.vue'

import SectionSplit from '~/components/shared/SectionSplit.vue'

useSeoMeta({
  title: 'About Us',
  description: 'Learn about our river guides, values, and passion for outdoor adventure.'
})
</script>

<template>
  <div>
    <!--
    -->
    <HeroAbout />
     
  <PageShell>
    <ValuesGrid />
      <SectionSplit
        eyebrow="OUR STORY"
        title="Built from a love of rivers."
        :paragraphs="[
          'What started as a passion for river travel grew into a mission to help more people experience the beauty of wild places.',
          'For years we\'ve guided families, first-time rafters, and outdoor enthusiasts through scenic river corridors and unforgettable adventures.',
          'Whether it\'s your first trip or your tenth, our goal remains the same: create a safe, memorable experience you\'ll want to do again.'
        ]"
        image="/images/compressed-irie/family-friendly-rafting-near-boca.webp"
      />
    
       
      <TripsTripGalleryGrid />

      <SectionSplit
        reverse-on-desktop
        eyebrow="WAYS WE CARE FOR THE ENVIRONMENT"
        title="Environmental Stewardship"
        :paragraphs="[
          'The Truckee River is the head honcho to us. Having operated over 30 years along the Truckee and other Rivers, I.R.I.E Rafting takes environment care hand in hand with our operations.',
          'We always employ a Leave-No-Trace principle and ensure all our guests are on board with our principles of keeping the environment clean, just because we love it and it is our duty to care.'

        ]"
        image="/images/processed/half-day-guided-whitewater-experience.webp" 
      />

    <!-- <WhyChooseUs /> -->
    <!-- <BookingCTA /> -->
     
  </PageShell>
  <Ddday27CTA />
  </div>
</template>