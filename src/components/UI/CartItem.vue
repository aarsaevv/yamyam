<template>
  <div>
    <div class="cart-items__item">
      <div class="item__main-block">
        <img v-if="mealType === 'Ramen'" src="../../assets/ramen-menu.svg" alt="Picture" />
        <img v-if="mealType === 'Soup'" src="../../assets/soup-menu.svg" alt="Picture" />
        <img v-if="mealType === 'Salad'" src="../../assets/salad-menu.svg" alt="Picture" />
        <img v-if="mealType === 'Rice'" src="../../assets/rice-menu.svg" alt="Picture" />
        <div class="main-block__text">
          <h3>{{ mealName }}</h3>
          <h5>{{ mealShortDescription }}</h5>
        </div>
      </div>
      <div class="item__buttons-size">
        <button>M</button>
        <button>L</button>
        <button>XL</button>
      </div>
      <div class="item__price">
        <h3>{{ mealPrice }}$</h3>
      </div>
      <div class="item__buttons-amount">
        <button>+</button>
        <h5>1</h5>
        <button>-</button>
      </div>
      <img src="../../assets/cross.svg" alt="Cross" />
    </div>
    <img class="cart-items__line" src="../../assets/grey-line.svg" alt="Line" />
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: ["mealName", "mealShortDescription", "mealPrice", "mealType"],
};
</script>

<style scoped>
.cart-items__item {
  display: flex;
  width: 945px;
  justify-content: space-between;
  align-items: center;
}

.item__main-block {
  width: 450px;
  display: flex;
  align-items: center;
  gap: 25px;
}

.main-block__text h3 {
  margin: 0;
  font-size: 23px;
  font-weight: 700;
  text-transform: uppercase;
}

.main-block__text h5 {
  margin: 0;
  font-size: 18px;
  font-weight: 400;
}

.item__buttons-size {
  display: flex;
  gap: 7px;
}

.item__buttons-size button {
  width: 30px;
  height: 30px;
  padding: 0;
  font-size: 16px;
  text-align: center;
  border: 2px solid #262524;
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0);
}

.item__price h3 {
  margin: 0;
  font-size: 23px;
  font-weight: 700;
  text-transform: uppercase;
}

.item__buttons-amount {
  display: flex;
  align-items: center;
  gap: 10px;
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

.cart-items__line {
  width: 945px;
  margin: 25px 0 30px 0;
}
</style>
