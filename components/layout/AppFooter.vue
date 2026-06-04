<template>
  <v-footer class="bg-grey-lighten-4 mt-12">
    <v-container class="py-10">

      <v-row>
        <v-col cols="12" md="4">
          <div class="text-h6 font-weight-bold mb-2">
            Truckee River Rafting
          </div>
          <div class="text-body-2">
            Unforgettable rafting experiences in Truckee.
          </div>
        </v-col>

        <v-col cols="6" md="4">
          <div class="font-weight-bold mb-2">Explore</div>
          <div>Trips</div>
          <div>Planning</div>
          <div>FAQ</div>
        </v-col>

        <v-col cols="6" md="4">
          <div class="font-weight-bold mb-2">Contact</div>
          <div>Email</div>
          <div>Phone</div>
        </v-col>
      </v-row>

      <div class="text-center text-caption mt-8">
        © {{ new Date().getFullYear() }} Truckee River Rafting
      </div>

    </v-container>
  </v-footer>
</template>