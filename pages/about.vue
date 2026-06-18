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
    
      <SectionSplit
        eyebrow="OUR STORY"
        title="Built from a love of rivers."
        :paragraphs="[
          'What started as a passion for river travel grew into a mission to help more people experience the beauty of wild places.',
          'For years we\'ve guided families, first-time rafters, and outdoor enthusiasts through scenic river corridors and unforgettable adventures.',
          'Whether it\'s your first trip or your tenth, our goal remains the same: create a safe, memorable experience you\'ll want to do again.'
        ]"
        image="/images/l-truckee-river-rafting-trip-view.webp"
      />
    
       
      <TripsTripGalleryGrid />
<ValuesGrid />
    <!-- <WhyChooseUs /> -->
    <!-- <BookingCTA /> -->
     
  </PageShell>
  <Ddday27CTA />
  </div>
</template>