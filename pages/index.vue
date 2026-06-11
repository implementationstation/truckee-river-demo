
<template>
  <div><HeroHome/>
  <PageShell>

    <ReasonBlock />

    <!-- <SectionSplit
  eyebrow="OUR STORY"
  title="Built from a love of rivers."
  :paragraphs="[
    'What started as a passion for river travel grew into a mission to help more people experience the beauty of wild places.',
    'For years we\'ve guided families, first-time rafters, and outdoor enthusiasts through scenic river corridors and unforgettable adventures.',
    'Whether it\'s your first trip or your tenth, our goal remains the same: create a safe, memorable experience you\'ll want to do again.'
  ]"
  image="/images/l-truckee-river-rafting-trip-view.webp"
/> -->

   <v-container>
    <TestimonialGrid :items="testimonials"></TestimonialGrid>
   </v-container>
    


    <!--INFO CARD GRID HERE< -->
    <SectionBlock
      v-for="section in page.sections"
      :key="section.title"
      :label="section.label"
      :title="section.title"
      :intro="section.intro"
    >
      <InfoCardGrid :cards="section.cards" />
    </SectionBlock>

      <!--CALL TO ACTION< CUNTS-->

      <!-- <BaseCta variant="discover" /> -->
            <BaseCta variant="book-trip" />
                  <!-- <BaseCta variant="buy-photos" /> -->
  </PageShell>
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