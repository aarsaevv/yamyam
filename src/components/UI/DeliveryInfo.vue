<template>
  <div>
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
            <input type="month" />
          </form>
          <form class="info__cvv" action="">
            <label for="">CVV/CVC</label>
            <input type="password" maxlength="3" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveryInfo",
};
</script>

<style scoped>
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
  font-size: 18px;
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
</style>
