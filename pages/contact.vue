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
                I.R.I.E River Rafting Company
              </v-list-item-title>
              <v-list-item-subtitle>
                7320 River Rd, Olympic Valley, CA 96146
              </v-list-item-subtitle>
            </v-list-item>

            <v-list-item>
              <template #prepend>
                <v-icon color="primary">mdi-phone</v-icon>
              </template>
              <v-list-item-title>
                <a href="tel:15305824900">(530) 582-4900</a>
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
  href="https://www.google.com/maps/dir//IRIE+Rafting+Company+Inc,+7320+River+Rd,+Olympic+Valley,+CA+96146/@39.2369381,-120.2071612,17z/data=!4m16!1m7!3m6!1s0x809bdf86584f66e3:0x9da8e36911c47fb8!2sIRIE+Rafting+Company+Inc!8m2!3d39.2369381!4d-120.2071612!16s%2Fg%2F1vjdq9vm!4m7!1m0!1m5!1m1!1s0x809bdf86584f66e3:0x9da8e36911c47fb8!2m2!1d-120.2071735!2d39.2369299?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="_noopener"
>
  Get Directions
</v-btn>

        </v-col>

        <!-- RIGHT: MAP -->
        <v-col cols="12" md="6">

          <v-card rounded="xl" elevation="2" class="overflow-hidden position-relative">

  <!-- MAP -->
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.2613689374634!2d-120.2071612!3d39.2369381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809bdf86584f66e3%3A0x9da8e36911c47fb8!2sIRIE%20Rafting%20Company%20Inc!5e0!3m2!1sen!2sus!4v1781823828969!5m2!1sen!2sus" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

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