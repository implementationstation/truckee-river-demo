<!-- components/GuideSchoolSection.vue -->
<template>
  <section class="guide-school-section py-16">
    <v-container>
      <div class="d-flex flex-column flex-lg-row ga-10 align-start">
        
        <!-- LEFT CONTENT -->
        <div class="content-side flex-grow-1">
          <div class="eyebrow mb-3">
            IRIE RAFT COMPANY GUIDE SCHOOL
          </div>

          <h2 class="text-h2 font-weight-black mb-6 hero-title">
            Learn To Guide Real Whitewater In Northern California
          </h2>

          <p class="text-h6 text-medium-emphasis mb-6">
            IRIE Rafting Company’s professional guide school trains students on
            Class II through Class IV-(V) rivers throughout Northern California.
            The 9–10 day program is designed for aspiring raft guides, outdoor
            professionals, and paddlers wanting serious river skills — not just
            a tourist float. :contentReference[oaicite:0]{index=0}
          </p>

          <v-row class="mb-8">
            <v-col cols="12" md="6">
              <div class="feature-card">
                <div class="feature-number">01</div>
                <h3 class="text-h5 font-weight-bold mb-2">
                  Real Guide Training
                </h3>

                <p class="text-body-1 text-medium-emphasis">
                  Students learn boat handling, reading water, rescue skills,
                  guest safety talks, rope systems, rigging, and commercial trip
                  logistics across multiple Northern California rivers. :contentReference[oaicite:1]{index=1}
                </p>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <div class="feature-card">
                <div class="feature-number">02</div>

                <h3 class="text-h5 font-weight-bold mb-2">
                  Industry-Level Experience
                </h3>

                <p class="text-body-1 text-medium-emphasis">
                  IRIE has operated rafting trips in Northern California for
                  more than 20 years and uses guide school to identify future
                  commercial guides for the Truckee River and advanced Class IV-V
                  trips. :contentReference[oaicite:2]{index=2}
                </p>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <div class="feature-card">
                <div class="feature-number">03</div>

                <h3 class="text-h5 font-weight-bold mb-2">
                  All Inclusive Training
                </h3>

                <p class="text-body-1 text-medium-emphasis">
                  Training includes camping, transportation, meals, rafting
                  equipment, helmets, PFDs, wetsuits, and paddling gear for most
                  participants. CPR and First Aid instruction are also included
                  in the curriculum. :contentReference[oaicite:3]{index=3}
                </p>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <div class="feature-card">
                <div class="feature-number">04</div>

                <h3 class="text-h5 font-weight-bold mb-2">
                  More Than Just Rowing
                </h3>

                <p class="text-body-1 text-medium-emphasis">
                  IRIE emphasizes environmental stewardship, Leave No Trace
                  ethics, natural history, and professional guest experience —
                  building guides who understand both rivers and responsibility. :contentReference[oaicite:4]{index=4}
                </p>
              </div>
            </v-col>
          </v-row>

          <div class="cta-panel">
            <div>
              <div class="text-overline mb-1">
                2025 GUIDE SCHOOL
              </div>

              <div class="text-h5 font-weight-bold">
                9–10 Day Intensive Training
              </div>

              <div class="text-body-1 text-medium-emphasis mt-2">
                Progress from beginner whitewater concepts to advanced
                commercial rafting systems on real rivers.
              </div>
            </div>

            <div class="d-flex ga-4 flex-wrap mt-6">
              <v-btn
                size="x-large"
                color="primary"
                rounded="xl"
                elevation="0"
              >
                Apply Now
              </v-btn>

              <v-btn
                size="x-large"
                variant="outlined"
                rounded="xl"
              >
                View Curriculum
              </v-btn>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="stats-side">
          <v-card
            rounded="xl"
            elevation="0"
            class="glass-card pa-6"
          >
            <div class="mb-8">
              <div class="text-overline mb-2">
                WHAT YOU'LL LEARN
              </div>

              <v-list bg-color="transparent">
                <v-list-item
                  v-for="item in skills"
                  :key="item"
                  density="comfortable"
                  class="px-0"
                >
                  <template #prepend>
                    <v-icon
                      color="primary"
                      icon="mdi-wave"
                      size="18"
                    />
                  </template>

                  <v-list-item-title>
                    {{ item }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </div>

            <v-divider class="mb-6" />

            <v-row>
              <v-col cols="6">
                <div class="stat-number">20+</div>
                <div class="stat-label">
                  Years Operating
                </div>
              </v-col>

              <v-col cols="6">
                <div class="stat-number">II–V</div>
                <div class="stat-label">
                  River Classes
                </div>
              </v-col>

              <v-col cols="6">
                <div class="stat-number">9–10</div>
                <div class="stat-label">
                  Training Days
                </div>
              </v-col>

              <v-col cols="6">
                <div class="stat-number">80%</div>
                <div class="stat-label">
                  Truckee River Ops
                </div>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const skills = [
  'Boat handling techniques',
  'How to read water',
  'Whitewater self rescue',
  'Rope systems & rigging',
  'Commercial safety talks',
  'Guest communication',
  'River rescue fundamentals',
  'Environmental stewardship'
]
</script>

<style scoped>
.guide-school-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(33, 150, 243, 0.14), transparent 35%),
    radial-gradient(circle at bottom right, rgba(0, 188, 212, 0.10), transparent 35%);
}

.hero-title {
  max-width: 760px;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
}

.feature-card {
  height: 100%;
  padding: 28px;
  border-radius: 28px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  backdrop-filter: blur(14px);
  transition: 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--v-theme-primary), 0.45);
}

.feature-number {
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  margin-bottom: 14px;
  color: rgb(var(--v-theme-primary));
}

.glass-card {
  position: sticky;
  top: 120px;
  width: 360px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);
}

.stat-number {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
}

.stat-label {
  margin-top: 8px;
  font-size: 0.9rem;
  opacity: 0.7;
}

.cta-panel {
  padding: 36px;
  border-radius: 32px;
  margin-top: 16px;
  background:
    linear-gradient(
      135deg,
      rgba(var(--v-theme-primary), 0.14),
      rgba(255,255,255,0.02)
    );
  border: 1px solid rgba(255,255,255,0.08);
}

@media (max-width: 1264px) {
  .glass-card {
    width: 100%;
    position: relative;
    top: 0;
  }
}
</style>