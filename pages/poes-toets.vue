<template>
  <v-container class="py-16">
    
    <!-- <OfficeShowcaseCarousel :slides="officeSlides" />
    <OfficeShowcaseSplit :slides="officeSlides" /> -->
    <OfficeShowcaseBentoBox :slides="officeSlides" />
  </v-container>
</template>

<script setup lang="ts">
import OfficeShowcaseSplit from '@/components/ddday-27/office/OfficeShowcaseSplit.vue'
import { officeSlides } from '@/data/ddday-27/OfficeMeeting'
import OfficeShowcaseBento from '~/components/ddday-27/office/OfficeShowcaseBento.vue';
import OfficeShowcaseBentoBox from '~/components/ddday-27/OfficeShowcaseBentoBox.vue';
</script>