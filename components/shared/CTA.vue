<template>

      <!-- =========================
    CTA SECTION
    ========================== -->
    <v-sheet class="cta-section py-16">
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            md="9"
            lg="7"
            class="text-center"
          >
            <div class="text-h3 font-weight-bold text-white mb-5">
              Ready To Plan Your Adventure?
            </div>

            <p class="text-h6 text-grey-lighten-2 mb-10">
              From family rafting trips to large group adventures,
              our team is here to help you every step of the way.
            </p>

            <div class="d-flex justify-center flex-wrap ga-4">
              <v-btn
                size="x-large"
                color="primary"
                rounded="xl"
                elevation="4"
                href="tel:15305824900"
              >
                <v-icon start>
                  mdi-phone
                </v-icon>

                Call 530.582.4900
              </v-btn>

              <v-btn
                size="x-large"
                color="white"
                variant="outlined"
                rounded="xl"
                href="mailto:info@raftirie.com"
              >
                <v-icon start>
                  mdi-email
                </v-icon>

                Email Us
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
</template>
<style>
/* CTA */
.cta-section {
  position: relative;

  background:
    linear-gradient(
      135deg,
      rgba(10, 20, 30, 0.95),
      rgba(20, 40, 60, 0.92)
    ),
    url('/images/l-guided-river-rafting-trips-tahoe.webp');

  background-size: cover;
  background-position: center;
}
</style>