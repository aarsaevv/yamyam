<template>
  <div class="item__buttons-amount">
    <button @click="decreaseAmountCounter">-</button>
    {{ amountCounter }}
    <button @click="increaseAmountCounter">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const amountCounter = ref(1);

const increaseAmountCounter = () => {
  if (amountCounter.value < 8) {
    amountCounter.value += 1;
  }
};

const decreaseAmountCounter = () => {
  if (amountCounter.value > 1) {
    amountCounter.value -= 1;
  }
};
</script>

<style scoped>
.item__buttons-amount {
  display: flex;
  align-items: center;
  gap: 5px;
}

.item__buttons-amount button {
  width: 25px;
  height: 30px;
  font-size: 18px;
  text-align: center;
  color: #f1e2d2;
  border-radius: 7px;
  background-color: #262524;
}

.item__buttons-amount h5 {
  margin: 0;
  font-size: 18px;
  font-weight: 400;
}

@media screen and (max-width: 400px) {
  .item__buttons-amount button {
    width: 23px;
    height: 23px;
    font-size: 15px;
  }

  .item__buttons-amount h5 {
    font-size: 15px;
  }
}
</style>
