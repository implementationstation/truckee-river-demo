<template>
  <v-container class="py-16">
    <v-row justify="center">
      <v-col cols="12" md="8">

        <div
          v-for="(step, i) in steps"
          :key="i"
          class="step"
        >
          <div class="line" v-if="i !== steps.length - 1"></div>

          <div class="dot"></div>

          <div class="card">
            <div class="time">{{ step.time }}</div>
            <h3 class="title">{{ step.title }}</h3>
            <p class="text">{{ step.text }}</p>
          </div>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({
  steps: Array
})
</script>

<style scoped>
.step {
  position: relative;
  padding-left: 40px;
  margin-bottom: 40px;
}

.dot {
  position: absolute;
  left: 0;
  top: 6px;
  width: 12px;
  height: 12px;
  background: #1867c0;
  border-radius: 50%;
}

.line {
  position: absolute;
  left: 5px;
  top: 20px;
  width: 2px;
  height: calc(100% - 10px);
  background: #ddd;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #eee;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.06);
}

.time {
  font-size: 12px;
  opacity: 0.6;
  margin-bottom: 4px;
}

.title {
  font-weight: 600;
  margin-bottom: 6px;
}

.text {
  font-size: 14px;
  opacity: 0.8;
}
</style>