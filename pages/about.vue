<script setup lang="ts">
import AboutHero from '~/components/about/AboutHero.vue'
import GuideStory from '~/components/about/GuideStory.vue'
import ValuesGrid from '~/components/about/ValuesGrid.vue'
import WhyChooseUs from '~/components/about/WhyChooseUs.vue'
import BookingCTA from '~/components/shared/BookingCTA.vue'

import PageShell from '~/components/page/PageShell.vue'

import CompactGridIconFirstStyle from '~/components/about/extras/values-grid/CompactGridIconFirstStyle.vue'

useSeoMeta({
  title: 'About Us',
  description: 'Learn about our river guides, values, and passion for outdoor adventure.'
})
</script>

<template>
  <PageShell>
    <AboutHero />
    <GuideStory />
    <ValuesGrid /> <CompactGridIconFirstStyle />
    <WhyChooseUs />
    <BookingCTA />
  </PageShell>
</template>