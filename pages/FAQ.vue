<template>
<div>
  <HeroFAQ/>
  
  <v-container class="py-16">
    <v-col cols="12">
      <h2 class="text-h3">
      Frequently Asked Questions
    </h2>
    </v-col>
  <!-- <ItineraryTimeline
  :steps="[
    { time: '9:00 AM', title: 'Arrival', text: 'Meet guides' },
    { time: '9:30 AM', title: 'Gear Up', text: 'Safety briefing' },
    { time: '10:00 AM', title: 'On the River', text: 'Enjoy float' }
  ]"
/> -->

<!-- <ComparisonCards
  :items="[
    {
      title: 'Trip Information',
      description: 'Perfect intro',
      price: '$120 | $100 (youth)',
      features: ['4 hours total', 'Guided Experience', 'Beginner/Family Friendly', 'Class II-III rapids', 'Scenic'],
      cta: 'Book'
    },
    {
      title: 'Premium',
      description: 'Best option',
      price: '$129',
      badge: 'Most Popular',
      featured: true,
      features: ['Longer', 'Rapids', 'Snacks'],
      cta: 'Book'
    }
  ]"
/> -->
    <!-- <FAQ />
    <ItineraryTimeline />
    <TripHighlights />
    <TrustBar />
    <StickyBookingCTA /> -->
    

<!-- OLD FAQ HARDCODE -->
    

    <v-col cols="12" class="mt-3">
      <v-expansion-panels variant="inset">

      <v-expansion-panel
        v-for="faq in faqs"
        :key="faq.question"
      >

        <v-expansion-panel-title>
          {{ faq.question }}
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          {{ faq.answer }}
        </v-expansion-panel-text>

      </v-expansion-panel>

    </v-expansion-panels>
    </v-col>

  </v-container>
  <Ddday27CTA />
</div>
</template>

<script setup>
import HeroFAQ from '~/components/hero/HeroFAQ.vue';
import { tripPage } from '~/components/Snazzy/data/tripPageFullSchema';
import FAQ from '~/components/Snazzy/FAQ.vue';
import ItineraryTimeline from '~/components/Snazzy/ItineraryTimeline.vue';
import SectionHeroPro from '~/components/Snazzy/SectionHeroPro.vue';
import TripHighlights from '~/components/Snazzy/TripHighlights.vue';
import TrustBar from '~/components/Snazzy/TrustBar.vue';
import StickyBookingCTA from '~/components/Snazzy/StickyBookingCTA.vue';

import ComparisonCards from '~/components/Snazzy/SideBySideComparison.vue';
/*
========================
FAQ DATA
========================
*/
const faqs = [

  {
    question: 'Do I need rafting experience?',
    answer: 'No experience is required for most beginner-friendly trips, including the half day Boca Run.'
  },

  {
    question: 'Are trips family friendly?',
    answer: 'Yes, we offer family-friendly rafting adventures. The half day Boca Run is family-friendly.'
  },
    //General Info

  {
    question: 
        'Can I bring some other things too?',
    answer: 
        'If you would like to bring other items, you are welcome to leave them in the shuttle vehicle, where they will remain safe and dry for the duration of your rafting trip. If you are bringing personal water bottles on the river, please be sure they can be secured to the raft to help cut down on the chance of litter in our beautiful rivers.'
  },
  {
    question: 
        'Whats essential for summer rafting?',
    answer: 
        ' We highly recommend that you bring waterproof sunscreen with a high SPF, or a non-cotton sun shirt. You also can bring sunglasses but they should have some sort of tether or strap to keep them on your body should you go in the river. You can bring a baseball cap and wear it under your helmet if you would like the added shade. We have sunscreen and sunglass retaining straps for sale in our office if you forget.'
  },
  {
    question: 
        'What happens to my stuff when I arrive on the day?',
    answer: 
        'Most guests find it helpful to bring a small backpack or tote bag to carry personal items onto the shuttle vehicle.  This will allow you to manage personal items such as towels, sunscreen, snacks, etc. These items may be safely left on the shuttle vehicle while you are rafting. Change of clothes & valuables should be left in your vehicle at our office.'
  },
  {
    question: 
        'Is it a good idea to bring my phone? I need my camera',
    answer: 
        'We discourage bringing any type of phone or camera on the raft. Even if they are waterproof, they do not float. I you do have one on the trip, the use of the it must not interfere with your ability to listen to your guide and paddle the raft.  We will not be responsible for the safety of such items. Pictures will be taken of your raft at certain points on most rivers and are available for purchase after your trip, or during the reservation process.'
  },
  {
    question: 
        'Since we might get wet, how can I leave the trip in dry attire?',
    answer: 
        'Bring dry clothing and shoes for after the trip and plastic bags to carry wet things (not nessesary). For Truckee trips, it is best to wait until you get back to the office to change, but on trips that are further away, it is nice to change before the van ride. Also, bring spares of anything you need to get home such as keys, glasses or contacts.'
  },
  {
    question: 
        'What should I avoid wearing?',
    answer: 
        'Cotton is not ideal for rafting as it will not keep you warm or dry out once it is wet! Denim jeans and heavy cotton are never appropriate on the river as the fabric retains water and loses insulation. Also avoid anything that may hamper your movement in the water like long dresses, baggy pants or large shoes/boots.'
  },
  {
    question: 'What should I NOT bring with me for this trip?',
    answer: 'Please do not bring pets, valuables such as jewelry, expensive sunglasses or cameras, and try not to bring too much gear. '
  }

]

</script>