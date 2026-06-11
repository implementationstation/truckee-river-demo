<template>
  <v-container class="py-16">
    <v-row class="ga-6">
      <v-col
        v-for="(card, i) in items"
        :key="i"
        cols="12"
        md="4"
      >
        <div class="card" :class="{ featured: card.featured }">

          <div v-if="card.badge" class="badge">
            {{ card.badge }}
          </div>

          <h3 class="title">{{ card.title }}</h3>
          <p class="desc">{{ card.description }}</p>

          <div class="price">{{ card.price }}</div>

          <ul class="features">
            <li v-for="(f, j) in card.features" :key="j">
              ✓ {{ f }}
            </li>
          </ul>

          <v-btn
            block
            class="mt-6"
            :color="card.featured ? 'primary' : 'grey-darken-1'"
          >
            {{ card.cta }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({ items: Array })
</script>

<style scoped>
.card {
  position: relative;
  padding: 28px;
  border-radius: 20px;
  border: 1px solid #eee;
  background: white;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
}

.card.featured {
  background: linear-gradient(135deg, #1867c0, #5cbbf6);
  color: white;
}

.badge {
  position: absolute;
  top: -10px;
  right: 16px;
  background: black;
  color: white;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
}

.title {
  font-weight: 600;
  margin-bottom: 6px;
}

.desc {
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 12px;
}

.price {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 16px;
}

.features {
  list-style: none;
  padding: 0;
}

.features li {
  margin-bottom: 8px;
  font-size: 14px;
}
</style>