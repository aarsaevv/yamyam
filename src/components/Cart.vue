<template>
  <div class="page-container">
    <div class="page-container__content">
      <Navbar />
      <div class="cart">
        <h2>Your cart あなたのカート</h2>
        <div class="cart-items">
          <div class="cart-items__item">
            <div class="item__main-block">
              <img src="../assets/ramen-menu.svg" alt="Ramen" />
              <div class="main-block__text">
                <h3>Miso ramen</h3>
                <h5>Rich soup but a little bit spicy</h5>
              </div>
            </div>
            <div class="item__buttons-size">
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
            <div class="item__price">
              <h3>12$</h3>
            </div>
            <div class="item__buttons-amount">
              <button>+</button>
              <h5>1</h5>
              <button>-</button>
            </div>
            <img src="../assets/cross.svg" alt="Cross" />
          </div>
          <img
            class="cart-items__line"
            src="../assets/grey-line.svg"
            alt="Line"
          />
          <div class="cart-items__item">
            <div class="item__main-block">
              <img src="../assets/rice-menu.svg" alt="Rice" />
              <div class="main-block__text">
                <h3>Rice with shrimp</h3>
                <h5>Rich soup but a little bit spicy</h5>
              </div>
            </div>
            <div class="item__buttons-size">
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
            <div class="item__price">
              <h3>15$</h3>
            </div>
            <div class="item__buttons-amount">
              <button>+</button>
              <h5>1</h5>
              <button>-</button>
            </div>
            <img src="../assets/cross.svg" alt="Cross" />
          </div>
          <img
            class="cart-items__line"
            src="../assets/grey-line.svg"
            alt="Line"
          />
          <div class="cart-items__item">
            <div class="item__main-block">
              <img src="../assets/salad-menu.svg" alt="Salad" />
              <div class="main-block__text">
                <h3>Wakame salad</h3>
                <h5>Rich soup but a little bit spicy</h5>
              </div>
            </div>
            <div class="item__buttons-size">
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
            <div class="item__price">
              <h3>10$</h3>
            </div>
            <div class="item__buttons-amount">
              <button>+</button>
              <h5>1</h5>
              <button>-</button>
            </div>
            <img src="../assets/cross.svg" alt="Cross" />
          </div>
          <img
            class="cart-items__line"
            src="../assets/grey-line.svg"
            alt="Line"
          />
        </div>
        <h2>delivery 配達</h2>
        <div class="delivery-data">
          <div class="delivery-data__credentials credentials">
            <div class="credentials__name name">
              <form class="name__first" action="">
                <label for="">First name</label>
                <input type="text" />
              </form>
              <form class="name__last" action="">
                <label for="">Last name</label>
                <input type="text" />
              </form>
            </div>
            <form action="">
              <label for="">Email address</label>
              <input type="email" />
            </form>
            <form action="">
              <label for="">Phone number</label>
              <input type="number" />
            </form>
          </div>
          <div class="delivery-data__address">
            <form action="">
              <label for="">Address line 1</label>
              <input type="text" />
            </form>
            <form action="">
              <label for="">Address line 2</label>
              <input type="text" />
            </form>
          </div>
          <div class="delivery-data__payment payment">
            <form action="">
              <label for="">Cardholder name</label>
              <input type="text" />
            </form>
            <form action="">
              <label for="">Card number</label>
              <input type="text" />
            </form>
            <div class="payment__info info">
              <form class="info__card-expired" action="">
                <label for="">Card expired</label>
                <input type="text" />
              </form>
              <form class="info__cvv" action="">
                <label for="">CVV/CVC</label>
                <input type="text" />
              </form>
            </div>
          </div>
        </div>
        <div class="check">
          <h3>Shopping cart</h3>
          <div class="check__image">
            <img src="../assets/mini-line.svg" alt="Line" />
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
            <img src="../assets/mini-line.svg" alt="Line" />
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
              <img src="../assets/mini-line.svg" alt="Line" />
            </div>
            <div class="check__total total">
              <div class="total__item">
                <h5>Total</h5>
                <h5>47.22$</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./UI/Navbar.vue";
export default {
  name: "Cart",
  components: { Navbar },
};
</script>

<style scoped>
.cart h2 {
  display: flex;
  justify-content: center;
  margin: 45px 0;
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

.cart-items__item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 76px;
}

.item__main-block {
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

form {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

form label {
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
}

form input {
  width: 483px;
  height: 26px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid rgba(37, 38, 36, 0.3);
  border-radius: 7px;
  padding: 0;
  margin: 0;
}

.delivery-data {
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 487px;
}

.delivery-data__credentials {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.name__first input,
.name__last input {
  width: 221px;
}

.credentials__name {
  display: flex;
  gap: 37px;
}

.delivery-data__address {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.delivery-data__payment {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.payment__info {
  display: flex;
  gap: 37px;
}

.info__card-expired input,
.info__cvv input {
  width: 221px;
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
</style>
