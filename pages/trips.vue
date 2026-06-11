<template>
  <div><HeroTrips />
  <PageShell>
    <!-- <TripHero
      :eyebrow="page.hero.eyebrow"
      :title="page.hero.title"
      :subtitle="page.hero.subtitle"
      :primary-action="page.hero.primaryAction"
      :secondary-action="page.hero.secondaryAction"
    /> -->

    <TripSnapshot :items="page.snapshot" />

    <WhyGrid :items="whyChooseUs" />

    <TripScheduleCards :trips="page.schedule" />

    <TripIncludedGrid :items="page.included" />

    <TripBookingCTA
      :eyebrow="page.cta.eyebrow"
      :title="page.cta.title"
      :text="page.cta.text"
      :button-text="page.cta.buttonText"
    />
  </PageShell>
  </div>
</template>

<script setup lang="ts">
import { tripsPage as page } from '~/data/pages/tripsPage';
import HeroTrips from '~/components/hero/HeroTrips.vue';
import TripHero from '~/components/trips/TripHero.vue';
import TripSnapshot from '~/components/trips/TripSnapshot.vue';
import TripScheduleCards from '~/components/trips/TripScheduleCards.vue';
import TripIncludedGrid from '~/components/trips/TripIncludedGrid.vue';
import TripBookingCTA from '~/components/trips/TripBookingCTA.vue';
import WhyGrid from '~/components/WhyGrid.vue';
import { whyChooseUs } from '~/data/why';



useSeoMeta({
  title: page.seo.title,
  description: page.seo.description,
  ogTitle: page.seo.title,
  ogDescription: page.seo.description,
})
</script>