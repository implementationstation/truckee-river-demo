<template>
  <div>
    <HeroTrips />

    <PageShell>
      <WhyGrid :items="quickFacts" />
      <TripScheduleCards :trips="page.schedule" />
      <BasicCarouselGallery />
      <PricingInfoPlanning />
      <TripBookingCTA
        :eyebrow="page.cta.eyebrow"
        :title="page.cta.title"
        :text="page.cta.text"
        :button-text="page.cta.buttonText"
        :href="page.cta.href"
      />
    </PageShell>
    <Ddday27CTA />
  </div>
</template>

<script setup lang="ts">
import { tripsPage as page } from '~/data/pages/tripsPage';
import { quickFacts } from '~/data/why';
import HeroTrips from '~/components/hero/HeroTrips.vue';
import TripScheduleCards from '~/components/trips/TripScheduleCards.vue';
import TripBookingCTA from '~/components/trips/TripBookingCTA.vue';
import PricingInfoPlanning from '~/components/ddday-27/PricingInfoPlanning.vue';
import BasicCarouselGallery from '~/components/ddday-27/BasicCarouselGallery.vue';
import WhyGrid from '~/components/WhyGrid.vue';
useSeoMeta({
  title: page.seo.title,
  description: page.seo.description,
  ogTitle: page.seo.title,
  ogDescription: page.seo.description,
})
</script>