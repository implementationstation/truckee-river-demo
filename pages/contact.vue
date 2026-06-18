<template>
  <div>

    <!-- ========================
    HERO
    ======================== -->

    <!-- <v-img
      src="/images/l-mfa-series-whitewater-adventures-in-california.webp"
      height="300"
      cover
    >
      <div class="hero-overlay">
        <div>
          <h1 class="text-white text-h3 font-weight-bold">
            Contact Us
          </h1>
          <p class="text-white">
            Questions? Let’s plan your rafting trip.
          </p>
        </div>
      </div>
    </v-img> -->
    <HeroContact />
    <!-- ========================
    MAIN CONTENT
    ======================== -->

    <v-container class="py-12">

      <v-row>

        <!-- LEFT: CONTACT INFO -->
        <v-col cols="12" md="5">

          <h2 class="text-h5 font-weight-bold mb-6">
            Get in Touch
          </h2>

          <v-list>

            <v-list-item>
              <template #prepend>
                <v-icon color="primary">mdi-map-marker</v-icon>
              </template>
              <v-list-item-title>
                I.R.I.E River Rafting
              </v-list-item-title>
              <v-list-item-subtitle>
                175 River Rd, Tahoe City, CA 96145
              </v-list-item-subtitle>
            </v-list-item>

            <v-list-item>
              <template #prepend>
                <v-icon color="primary">mdi-phone</v-icon>
              </template>
              <v-list-item-title>
                <a href="tel:15305831111">(530) 583-1111</a> 
                <br/> <a href="tel:15305824900">(530) 582-4900</a>
              </v-list-item-title>
              <v-list-item-subtitle>
                Call anytime
              </v-list-item-subtitle>
            </v-list-item>

            <v-list-item>
              <template #prepend>
                <v-icon color="primary">mdi-email</v-icon>
              </template>
              <v-list-item-title>
                <a href="mailto:info@raftirie.com">
                  info@raftirie.com
                </a>
              </v-list-item-title>
              <v-list-item-subtitle>
                Email inquiries
              </v-list-item-subtitle>
            </v-list-item>

          </v-list>

          <!-- DIRECTIONS BUTTON -->
          <v-btn
  color="primary"
  size="large"
  href="https://www.google.com/maps/dir/?api=1&destination=175+River+Road+Tahoe+City+CA"
  target="_blank"
>
  Get Directions
</v-btn>

        </v-col>

        <!-- RIGHT: MAP -->
        <v-col cols="12" md="7">

          <v-card rounded="xl" elevation="2" class="overflow-hidden position-relative">

  <!-- MAP -->
  <iframe
    src="https://www.google.com/maps?q=175+River+Road+Tahoe+City+CA&z=15&output=embed"
    width="100%"
    height="420"
    style="border:0;"
    loading="lazy"
  />

  <!-- OVERLAY CTA -->
  <div class="map-overlay">
    <v-btn
      color="primary"
      size="small"
      href="https://www.google.com/maps/dir/?api=1&destination=175+River+Road+Tahoe+City+CA"
      target="_blank"
    >
      Open in Maps
    </v-btn>
  </div>

</v-card>

        </v-col>

      </v-row>

      <!-- ========================
      FORM (YOUR ORIGINAL, UPGRADED)
      ======================== -->

      <v-row class="mt-12">
        <v-col cols="12" md="8">

          <h2 class="text-h5 font-weight-bold mb-4">
            Send a Message
          </h2>

          <v-card class="pa-6" rounded="xl" elevation="1">

            <v-text-field
              v-model="name"
              label="Name"
              variant="outlined"
              class="mb-4"
            />

            <v-text-field
              v-model="email"
              label="Email"
              variant="outlined"
              class="mb-4"
            />

            <v-textarea
              v-model="message"
              label="Message"
              variant="outlined"
              class="mb-4"
            />

            <v-btn
              color="primary"
              size="large"
              :loading="loading"
              @click="submitForm"
            >
              Send Message
            </v-btn>

            <v-alert
              v-if="success"
              type="success"
              class="mt-6"
            >
              Message sent successfully!
            </v-alert>

          </v-card>

        </v-col>
      </v-row>

    </v-container>
    <Ddday27CTA />
  </div>
</template>

<script setup>
import HeroContact from '~/components/hero/HeroContact.vue'
const name = ref('')
const email = ref('')
const message = ref('')
const success = ref(false)
const loading = ref(false)

const mapEmbed =
  'https://www.google.com/maps?q=175+River+Road+Tahoe+City+CA&output=embed'

/*
========================
SUBMIT FORM (IMPROVED)
========================
*/

const submitForm = async () => {
  loading.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        message: message.value
      }
    })

    success.value = true

    // reset form
    name.value = ''
    email.value = ''
    message.value = ''

  } catch (err) {
    console.error(err)
  }

  loading.value = false
}

/*
========================
SEO
========================
*/

useSeoMeta({
  title: 'Contact | Truckee River Rafting',
  description: 'Contact our rafting guides near Tahoe.'
})
</script>

<style scoped>
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  padding: 24px;
}

.map-overlay {
  position: absolute;
  bottom: 16px;
  right: 16px;
}
/* //PREMIUM ADDITION */
.map-overlay::before {
  content: '';
  position: absolute;
  inset: -20px;
  background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
  z-index: -1;
}
</style>