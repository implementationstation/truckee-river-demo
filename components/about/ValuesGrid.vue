<script setup lang="ts">
const values = [
  {
    title: 'Safety First',
    text: 'Professional guidance and preparation for every trip.'
  },
  {
    title: 'Respect Nature',
    text: 'We leave rivers and camps better than we found them.'
  },
  {
    title: 'Real Adventure',
    text: 'Authentic outdoor experiences, not tourist attractions.'
  },
  {
    title: 'Great Memories',
    text: 'The moments people remember long after the trip ends.'
  }
]
</script>

<template>
  <v-container class="py-16">
    <div class="text-center mb-12">
      <div class="text-overline">
        OUR VALUES
      </div>

      <h2 class="text-h3 font-weight-bold">
        What matters to us
      </h2>
    </div>

    <v-row>
      <v-col
        v-for="value in values"
        :key="value.title"
        cols="12"
        sm="6"
        lg="3"
      >
        <v-card
          rounded="xl"
          variant="outlined"
          height="100%"
        >
          <v-card-text class="pa-8">
            <h3 class="text-h6 mb-3">
              {{ value.title }}
            </h3>

            <p class="text-medium-emphasis">
              {{ value.text }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>