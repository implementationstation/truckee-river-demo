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
          'A love for river travel and the beauty of the wilderness that they flow through has grown into a mission. To help more people experience the wild places that a river can take you. ',
          'For over 30 years we have guided families, first-time rafters, and outdoor enthusiasts through scenic river corridors and unforgettable adventures. The unknown mystery that is always downstream will forever keep us coming back to the river. The experiences we have with our guests will forever make each trip special.',
          'Whether it\'s your first trip or your tenth, our goal remains the same: create safe and memorable experiences that  you\'ll want to do again and again.',
          'ISOLATED RIVERS INCREDIBLE EXPERIENCES'
          ]"
        image="/images/compressed-irie/lake-tahoe-whitewater-rafting-trip.webp"
      />
    
       <SectionSplit 
       reverse-on-desktop
        eyebrow="RIVERSIDE OFFICE"
        title="I.R.I.E Riverside Office"
        :paragraphs="[
          'Our private office is the meeting location for most IRIE Rafting trips. Enjoy the amenities we offer at our outpost before and after your trip. Transportation is provided from our office to and from the river section you have chosen.',
          'For once you do not need to worry about parking or driving around Tahoe.'
        ]"
        image="/images/compressed-irie/after-deployment/irie-river-rafting-riverside-office-third.webp"
       />
      <TripsTripGalleryGrid />

      <SectionSplit
        
        eyebrow="WAYS WE CARE FOR THE ENVIRONMENT"
        title="Environmental Stewardship"
        :paragraphs="[
          'Having operated over 30 years along the Truckee and other Rivers, I.R.I.E Rafting takes environment care hand in hand with our operations.',
          'No big corporations here. We live locally and play locally. When you frequent local businesses, you support an entire community.  Thank you for helping to make Lake Tahoe  and Truckee a place we can all call home.',
          'We love our Lake Tahoe/Truckee community and believe in giving back to our local and global community. We are proud supporters of Adventure Risk Challenge, Tahoe Bikal, High Fives, the Zawadisha Fund, Project Great Outdoors and other local non-profit organizations and causes.',
          'Our livelihood depends on keeping our rivers clean and protecting them so future generations can benefit both economically and recreationally. We try to do our part by recycling and using recycled products, serving organic food, supporting environmental organizations, participating in river clean-ups and practicing Leave No Trace outdoor ethics.'

        ]"
        image="/images/compressed-irie/sierra-nevada-river-rafting-adventure-trip.webp" 
      />

    <!-- <WhyChooseUs /> -->
    <!-- <BookingCTA /> -->
     
  </PageShell>
  <Ddday27CTA />
  </div>
</template>