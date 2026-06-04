<script setup lang="ts">
const reasons = [
  {
    title: 'Experienced Guides',
    text: 'Knowledgeable professionals who know the river, conditions, and safety procedures.'
  },
  {
    title: 'Small Groups',
    text: 'More personal experiences and more time on the water.'
  },
  {
    title: 'Easy Planning',
    text: 'Clear trip information, simple booking, and no surprises.'
  }
]
</script>

<template>
  <v-container class="py-16">
    <div class="text-center mb-12">
      <div class="text-overline">
        WHY CHOOSE US
      </div>

      <h2 class="text-h3 font-weight-bold">
        Why raft with us?
      </h2>
    </div>

    <v-row>
      <v-col
        v-for="reason in reasons"
        :key="reason.title"
        cols="12"
        md="4"
      >
        <v-card
          variant="tonal"
          rounded="xl"
          height="100%"
        >
          <v-card-text class="pa-8">
            <h3 class="text-h5 mb-4">
              {{ reason.title }}
            </h3>

            <p class="text-medium-emphasis">
              {{ reason.text }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>