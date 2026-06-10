<template>
  <v-container :class="['py-16', containerClass]">
    <v-row
      align="center"
      :class="['ga-8', reverseOnDesktop ? 'flex-md-row-reverse' : '']"
    >
      <!-- TEXT -->
      <v-col cols="12" :md="textCols">
        <div v-if="eyebrow" class="text-overline mb-4">
          {{ eyebrow }}
        </div>

        <h2 class="text-h3 font-weight-bold mb-6">
          {{ title }}
        </h2>

        <div class="text-body-1">
          <p
            v-for="(paragraph, i) in paragraphs"
            :key="i"
            class="mb-4"
          >
            {{ paragraph }}
          </p>
        </div>

        <!-- Optional slot for CTA/buttons -->
        <div v-if="$slots.actions" class="mt-6">
          <slot name="actions" />
        </div>
      </v-col>

      <!-- IMAGE -->
      <v-col cols="12" :md="imageCols">
        <v-sheet
          :rounded="rounded"
          :color="imageBg"
          class="overflow-hidden"
          :elevation="elevation"
        >
          <v-img
            :src="image"
            :alt="title"
            cover
            :aspect-ratio="aspectRatio"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
defineProps({
  // Content
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  paragraphs: { type: Array as () => string[], default: () => [] },
  image: { type: String, required: true },

  // Layout
  reverseOnDesktop: { type: Boolean, default: false },
  textCols: { type: [String, Number], default: 5 },
  imageCols: { type: [String, Number], default: 6 },

  // Style
  rounded: { type: String, default: 'xl' },
  imageBg: { type: String, default: 'grey-lighten-3' },
  elevation: { type: [String, Number], default: 0 },
  aspectRatio: { type: [String, Number], default: 4 / 3 },

  // Utility
  containerClass: { type: String, default: '' }
})
</script>