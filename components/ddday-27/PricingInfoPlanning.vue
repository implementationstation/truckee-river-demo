<!-- components/RaftingTripInfoCard.vue -->
<template>
  <v-container 
    fluid
    class="py-4 py-md-10 px-2 px-md-4"
    >
    <v-card
      class="rounded-xl overflow-hidden"
      elevation="4"
    >
      <!-- HERO 
       
      #363732 - dark-gray/blackish
      #147F9C   dark-turqoise/lighterdeepsea
      #4992C3   blueish lighter than above
      #
      -->
      <v-sheet
        color="dark-blue"
        class="pa-3"
      >
        <div class="d-flex flex-column flex-md-row justify-space-between">
          <div class="pa-3">
            <div class="text-overline mb-2 opacity-80">
              Half Day Trip Twice Per Day
            </div>

            <h2>
              Boca - Floriston Gorge Half Day Rafting
            </h2>

            <!-- <div class="text-body-2 text-md-subtitle-1 mt-2 opacity-90">
              {{ trip.subtitle }}
            </div> -->
          </div>

          <v-chip
            class="mt-2 mt-md-0 align-self-start"
            color=""
            text-color="primary"
            size="large"
          >
            {{ trip.duration }}
          </v-chip>
        </div>
      </v-sheet>

      <v-card-text class="pa-6 pa-md-8">
        <v-row>
          <!-- LEFT COLUMN -->
          <v-col cols="12" md="7">
            <!-- PRICING -->
            <v-card
              variant="outlined"
              class="rounded-lg mb-6"
            >
              <v-card-title class="d-flex align-center">
                <v-icon
                  color="primary"
                  class="mr-2"
                >
                  mdi-cash
                </v-icon>

                Trip Pricing
              </v-card-title>

              <v-divider />

              <v-list>
                <v-list-item
                  v-for="price in trip.pricing"
                  :key="price.label"
                >
                  <template #prepend>
                    <v-icon color="primary">
                      {{ price.icon }}
                    </v-icon>
                  </template>

                  <v-list-item-title>
                    {{ price.label }}
                  </v-list-item-title>

                  <!-- <template #append>
                    <div class="font-weight-bold text-primary">
                      {{ price.value }}
                    </div>
                  </template> -->

                  <v-list-item-subtitle class="text-primary font-weight-bold">
                      {{ price.value }}
                    </v-list-item-subtitle>

                </v-list-item>
              </v-list>
            </v-card>

            <!-- INCLUDED -->
            <v-card
              variant="outlined"
              class="rounded-lg mb-6"
            >
              <v-card-title class="d-flex align-center">
                <v-icon
                  color="success"
                  class="mr-2"
                >
                  mdi-check-circle
                </v-icon>

                Included With Your Trip
              </v-card-title>

              <v-divider />

              <v-list>
                <v-list-item
                  v-for="item in trip.included"
                  :key="item"
                >
                  <template #prepend>
                    <v-icon color="success">
                      mdi-check
                    </v-icon>
                  </template>

                  <v-list-item-title>
                    {{ item }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>

            <!-- IMPORTANT NOTES -->
            <v-card
              variant="outlined"
              class="rounded-lg"
            >
              <v-card-title class="d-flex align-center">
                <v-icon
                  color="warning"
                  class="mr-2"
                >
                  mdi-alert-circle
                </v-icon>

                Important Information
              </v-card-title>

              <v-divider />

              <v-list>
                <v-list-item
                  v-for="note in trip.notes"
                  :key="note"
                >
                  <template #prepend>
                    <v-icon color="warning">
                      mdi-circle-small
                    </v-icon>
                  </template>

                  <v-list-item-title>
                    {{ note }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>

          <!-- RIGHT COLUMN -->
          <v-col cols="12" md="5">
            <!-- DISCOUNTS -->
            <v-card
              variant="tonal"
              color="success"
              class="rounded-lg mb-6"
            >
              <v-card-title>
                Discounts Available
              </v-card-title>

              <v-divider />

              <v-list bg-color="transparent">
                <v-list-item
                  v-for="discount in trip.discounts"
                  :key="discount.title"
                >
                  <template #prepend>
                    <v-icon color="success">
                      mdi-tag
                    </v-icon>
                  </template>

                  <v-list-item-title>
                    {{ discount.title }}
                  </v-list-item-title>

                  <v-list-item-subtitle>
                    {{ discount.description }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card>

            <!-- GRATUITIES -->
            <v-card
              variant="tonal"
              color="warning"
              class="rounded-lg mb-6"
            >
              <v-card-title>
                Gratuities
              </v-card-title>

              <v-divider />

              <v-card-text>
                {{ trip.gratuities }}
              </v-card-text>
            </v-card>

            <!-- CANCELLATION -->
            <v-card
              variant="tonal"
              color="error"
              class="rounded-lg"
            >
              <v-card-title>
                Cancellation Policy
              </v-card-title>

              <v-divider />

              <v-list bg-color="transparent">
                <v-list-item
                  v-for="policy in trip.cancellation"
                  :key="policy.title"
                >
                  <v-list-item-title class="font-weight-bold">
                    {{ policy.title }}
                  </v-list-item-title>

                  <v-list-item-subtitle>
                    {{ policy.description }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
//import { raftingTrip } from '../../data/rafting-trip'
const raftingTrip = {
  title: 'Half Day Truckee River Trip',

  subtitle:
    'Family-friendly whitewater rafting experience with professional guides.',

  duration: '3.5 Hours',

  pricing: [
    {
      label: 'Adult Ticket (14+)',
      value: '$120',
      icon: 'mdi-account',
    },
    {
      label: 'Youth Ticket (5 - 14 years)',
      value: '$100',
      icon: 'mdi-account-child',
    },
  ],

  included: [
    'Professional raft guide in each raft',
    'Helmet, personal floatation device & paddle',
    'Transportation provided from our parking area',
    'Safety orientation',
    'Wetsuit & Paddling Jacket (only when applicable)'
  ],

  notes: [
    'Arrive 5-10 minutes early',
    'Wear quick-dry clothing',
    'Secure footwear required',
    'No valuables on raft (including jewelry)',
  ],

  discounts: [
    {
      title: 'Military Discount',
      description: '10% off eligible bookings',
    },
    {
      title: 'Returning Guest',
      description: '5% off future trips',
    },
  ],

  gratuities:
    'In this industry gratuities are a common way of showing appreciation for a job well done. While our staff is compensated for their hardwork, anything extra means a lot to them.',

  cancellation: [
    {
      title: '48+ Hour Cancellation',
      description: 'Eligible for 100% refund minus processing fees.',
    },
    {
      title: 'Less Than 48 Hours',
      description: 'Eligible for 50% refund minus processing fees.',
    },
    {
      title: 'No Shows',
      description: 'Not eligible for a refund.',
    },
  ],
}
const trip = raftingTrip
</script>

<style scoped>
.opacity-80 {
  opacity: 0.8;
}

.opacity-90 {
  opacity: 0.9;
}

/* APPARENTLY ADD THIS GLOBALLY INSIDE SCOPED STYLES
.v-card,
.v-list-item,
.v-card-title,
.v-list-item-title,
.v-list-item-subtitle {
  overflow-wrap: anywhere;
  word-break: break-word;
}
*/
</style>