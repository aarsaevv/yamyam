<template>
  <div class="page-container">
    <div class="page-container__content">
      <Navbar />
      <div class="cart">
        <h2>Your cart あなたのカート</h2>
        <div class="cart-items">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <h2>delivery 配達</h2>
        <div class="delivery">
          <DeliveryInfo />
          <DeliveryCheck />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./UI/Navbar.vue";
import CartItem from "./UI/CartItem.vue";
import DeliveryInfo from "./UI/DeliveryInfo.vue";
import DeliveryCheck from "./UI/DeliveryCheck.vue";
export default {
  name: "Cart",
  components: { Navbar, CartItem, DeliveryInfo, DeliveryCheck },
};
</script>
<style scoped>
.page-container {
  background-image: url("../assets/background-cart-1920.png");
  height: 100%;
  background-size: cover;
}

@media screen and (max-width: 1540px) {
  .page-container {
    background-image: url("../assets/background-cart-1536.png");
    background-size: cover;
  }
}

.cart h2 {
  display: flex;
  justify-content: center;
  margin: 25px 0;
  height: 60px;
  color: #262524;
  font-size: 37px;
  font-weight: 900;
  text-transform: uppercase;
}

.cart-items {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.delivery {
  display: flex;
  justify-content: center;
  gap: 98px;
}
</style>
