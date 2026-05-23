<template>

  <v-container class="py-16">

    <h2 class="text-h3 mb-8">
      Frequently Asked Questions
    </h2>

    <v-expansion-panels>

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

  </v-container>

</template>

<script setup>

/*
========================
FAQ DATA
========================
*/
const faqs = [

  {
    question: 'Do I need rafting experience?',
    answer: 'No experience is required for most beginner-friendly trips.'
  },

  {
    question: 'What should I bring?',
    answer: 'Bring sunscreen, water shoes, and quick-dry clothing.'
  },

  {
    question: 'Are trips family friendly?',
    answer: 'Yes, we offer family-friendly rafting adventures.'
  }

]

</script>