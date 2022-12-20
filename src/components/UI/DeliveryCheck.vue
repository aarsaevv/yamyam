<template>
  <div>
    <div class="delivery__check">
      <div class="check">
        <h3>Shopping cart</h3>
        <div class="check__image">
          <img src="../../assets/mini-line.svg" alt="Line" />
        </div>
        <div class="check__delivery delivery">
          <div class="delivery__item">
            <h5>Miso ramen</h5>
            <h5>12$</h5>
          </div>
          <div class="delivery__item">
            <h5>Rice with shrimp</h5>
            <h5>15$</h5>
          </div>
          <div class="delivery__item">
            <h5>Wakame salad</h5>
            <h5>10$</h5>
          </div>
        </div>
        <div class="check__image">
          <img src="../../assets/mini-line.svg" alt="Line" />
        </div>
        <div class="check__subtotal subtotal">
          <div class="subtotal__item">
            <h5>Subtotal</h5>
            <h5>37$</h5>
          </div>
          <div class="subtotal__item">
            <h5>Tax</h5>
            <h5>2.22$$</h5>
          </div>
          <div class="subtotal__item">
            <h5>Delivery</h5>
            <h5>8$</h5>
          </div>
          <div class="check__image">
            <img src="../../assets/mini-line.svg" alt="Line" />
          </div>
          <div class="check__total total">
            <div class="total__item">
              <h5>Total</h5>
              <h5>47.22$</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="delivery__button">
        <BigRedButton>PROCEED TO PAY</BigRedButton>
      </div>
    </div>
  </div>
</template>

<script>
import BigRedButton from "./BigRedButton.vue";

export default {
  name: "DeliveryCheck",
  components: { BigRedButton },
};
</script>

<style scoped>
.delivery__check {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.check {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  height: 457px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid rgba(37, 38, 36, 0.3);
  border-radius: 7px;
}

.check h3 {
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
}

.check__image {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.check__delivery {
  width: 300px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  margin: 0 auto;
}

.delivery__item {
  display: flex;
  justify-content: space-between;
}

.check__subtotal {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.subtotal__item {
  display: flex;
  justify-content: space-between;
}

.total__item {
  display: flex;
  justify-content: space-between;
}

.delivery__item h5 {
  font-size: 20px;
  font-weight: 400;
  margin: 0;
}

.subtotal__item h5 {
  display: flex;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
}

.total__item h5 {
  display: flex;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
}

.delivery__button {
  display: flex;
  justify-content: center;
}
</style>