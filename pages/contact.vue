<template>

  <v-container class="py-16">

    <h1 class="text-h3 mb-8">
      Contact Us
    </h1>

    <!--
    ========================
    CONTACT FORM
    ========================
    -->

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
      @click="submitForm"
    >
      Send Message
    </v-btn>

    <!--
    ========================
    SUCCESS MESSAGE
    ========================
    -->

    <v-alert
      v-if="success"
      type="success"
      class="mt-6"
    >
      Message sent successfully!
    </v-alert>

  </v-container>

</template>

<script setup>

const name = ref('')
const email = ref('')
const message = ref('')
const success = ref(false)

/*
========================
SUBMIT FORM
========================
*/

const submitForm = async () => {

  await $fetch('/api/contact', {

    method: 'POST',

    body: {
      name: name.value,
      email: email.value,
      message: message.value
    }

  })

  success.value = true

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
