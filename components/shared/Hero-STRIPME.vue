<script setup lang="ts">
interface CTA {
  label: string
  to: string
}

const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  cta: Object as () => CTA,

  layout: { type: String, default: 'center' },
  align: { type: String, default: 'left' },
  reverse: Boolean,

  height: { type: String, default: '80vh' },
  background: String,
  overlayOpacity: { type: Number, default: 0.4 },

  position: Object as () => {
    vertical?: 'top' | 'center' | 'bottom'
    horizontal?: 'left' | 'center' | 'right'
  }
})

const bgStyle = computed(() => ({
  backgroundImage: props.background ? `url(${props.background})` : undefined,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))

const positionClasses = computed(() => {
  return [
    'd-flex',
    props.position?.vertical === 'top' && 'align-start',
    props.position?.vertical === 'center' && 'align-center',
    props.position?.vertical === 'bottom' && 'align-end',

    props.position?.horizontal === 'left' && 'justify-start text-left',
    props.position?.horizontal === 'center' && 'justify-center text-center',
    props.position?.horizontal === 'right' && 'justify-end text-right'
  ]
})
</script>

<template>
  <section :style="[bgStyle, { height: props.height }]" class="position-relative">
    
    <!-- overlay -->
    <div
      v-if="background"
      class="position-absolute top-0 left-0 w-100 h-100"
      :style="{ background: `rgba(0,0,0,${overlayOpacity})` }"
    />

    <v-container class="fill-height">
      <div :class="positionClasses">

        <div style="max-width: 700px;">
          <h1 class="text-h2 font-weight-bold">{{ title }}</h1>
          <h2 v-if="subtitle" class="text-h5">{{ subtitle }}</h2>
          <p v-if="description" class="mt-4">{{ description }}</p>

          <v-btn
            v-if="cta"
            class="mt-6"
            color="primary"
            size="large"
            :to="cta.to"
          >
            {{ cta.label }}
          </v-btn>
        </div>

      </div>
    </v-container>
  </section>
</template>
