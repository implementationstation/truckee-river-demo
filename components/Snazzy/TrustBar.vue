<template>
  <v-sheet
    color="surface"
    class="pb-6"
  >
    <v-container>

      <v-row>
        <v-col
          v-for="item in trustItems"
          :key="item.title"
          cols="6"
          md="2"
        >
          <div class="text-center">

            <v-icon
              size="36"
              color="primary"
              :class="item.icon"
            >
              {{ item.icon }}
            </v-icon>

            <div
              class="text-h6 font-weight-bold mt-2"
            >
              {{ item.title }}
            </div>

            <div
              class="text-body-2 text-medium-emphasis"
            >
              {{ item.value }}
            </div>

          </div>
        </v-col>

      </v-row>

    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { TrustBarItems } from '~/data/trustBar';
const trustItems= TrustBarItems


</script>