<!-- components/booking/StickySeatsBar.vue -->

<template>
  <div class="sticky-seats">

    <div class="seat-alert">
      🔥 Only <strong>3 Seats Left</strong> On Tomorrow's Morning Trip
    </div>

    <v-btn
      color="orange-darken-2"
      rounded="pill"
      size="large"
      to="/trips"
    >
      Reserve Yours
    </v-btn>

  </div>
</template>

<style scoped>
.sticky-seats {
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;

  z-index: 999;

  background: #111;
  color: white;

  border-radius: 20px;

  padding: 12px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 10px 30px rgba(0,0,0,.3);
}

.seat-alert {
  font-size: .9rem;
  margin-right: 12px;
}
</style>