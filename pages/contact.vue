<template>

  <v-main>

    <v-container class="py-10">

      <h1 class="text-h3 mb-6">
        Contact Us
      </h1>

      <!--
      ========================
      CONTACT FORM
      ========================
      -->

      <v-text-field
        label="Name"
        variant="outlined"
        class="mb-4"
      />

      <v-text-field
        label="Email"
        variant="outlined"
        class="mb-4"
      />

      <v-textarea
        label="Message"
        variant="outlined"
        class="mb-4"
      />

      <v-btn
        color="primary"
        size="large"
      >
        Send Message
      </v-btn>

    </v-container>

  </v-main>
</template>
