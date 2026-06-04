<template>
  <!-- /*
      LAYOUT PAGESHELL SECTION
*/ -->
  <PagePageShell>

    <!-- /*
      HERO SECTION
*/ -->
    <!-- <HomeHomeHero /> -->
     
    <HeroSection
    :title="page.hero.subtitle"
    :subtitle="page.hero.subtitle"
    image=""
    />

    
<!-- /*
      INFO CARD SECTION
*/ -->
    <PageSectionBlock
      v-for="section in page.sections"
      :key="section.title"
      :label="section.label"
      :title="section.title"
      :intro="section.intro"
    >
      <PageInfoCardGrid :cards="section.cards" />
    </PageSectionBlock>


<!-- /*
      CALL TO ACTION SECTION
*/ -->
    <PageCTASection
      eyebrow="Ready?"
      title="Book the Truckee River Boca Run."
      text="Keep the final action painfully obvious. No cleverness here. Just make booking easy."
      button-text="Start Booking"
    />

  </PagePageShell>
</template>

<script setup lang="ts">
import { truckeeHomePage as page } from '~/data/pages/truckeeHome'
import PagePageShell from '~/components/page/PageShell.vue'
import HomeHomeHero from '~/components/home/HomeHero.vue'
import HeroSection from '~/components/shared/HeroSection.vue';


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