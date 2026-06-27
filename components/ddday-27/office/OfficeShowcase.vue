<script setup lang="ts">
import { officeSlides } from "@/data/ddday-27/OfficeMeeting"

// Swap layouts here
import OfficeLayout from "./OfficeShowcaseSplit.vue"
// import OfficeLayout from "./OfficeShowcaseCarousel.vue"
// import OfficeLayout from "./OfficeShowcaseBento.vue"
</script>

<template>
  <OfficeLayout :slides="officeSlides" />
</template>