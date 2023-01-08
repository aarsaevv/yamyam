<template>
  <div>
    <div v-if="this.isAddedToCart">
      <div class="cart-items__item button">
        <div class="item__main-block">
          <img
            v-if="mealType === 'Ramen'"
            class="item__image"
            src="../../assets/ramen-menu.svg"
            alt="Picture"
          />
          <img
            v-if="mealType === 'Soup'"
            class="item__image"
            src="../../assets/soup-menu.svg"
            alt="Picture"
          />
          <img
            v-if="mealType === 'Salad'"
            class="item__image"
            src="../../assets/salad-menu.svg"
            alt="Picture"
          />
          <img
            v-if="mealType === 'Rice'"
            class="item__image"
            src="../../assets/rice-menu.svg"
            alt="Picture"
          />
          <div class="main-block__text">
            <h3>{{ mealName }}</h3>
            <h5>{{ mealShortDescription }}</h5>
          </div>
        </div>
        <div class="item__meal-size meal-size">
          <button
            @click="this.mealSize = 'medium'"
            :class="this.mealSize === 'medium' ? 'selectedSize' : ''"
            class="meal-size__medium"
          >
            M
          </button>
          <button
            @click="this.mealSize = 'large'"
            :class="this.mealSize === 'large' ? 'selectedSize' : ''"
            class="meal-size__large"
          >
            L
          </button>
          <button
            @click="this.mealSize = 'xl'"
            :class="this.mealSize === 'xl' ? 'selectedSize' : ''"
            class="meal-size__xl"
          >
            XL
          </button>
        </div>
        <div class="item__price">
          <h3 v-if="this.mealSize === 'medium'">
            {{ priceMD }}$ / {{ weightMD }}g
          </h3>
          <h3 v-if="this.mealSize === 'large'">
            {{ priceLG }}$ / {{ weightLG }}g
          </h3>
          <h3 v-if="this.mealSize === 'xl'">
            {{ priceXL }}$ / {{ weightXL }}g
          </h3>
        </div>

        <AmountSelector />
        <img
          @click="removeMeal(id)"
          class="button__remove"
          src="../../assets/bin.svg"
          alt="Bin"
        />
      </div>
      <div class="cart-items__item-mobile button">
        <div class="item__main-block">
          <img
            v-if="mealType === 'Ramen'"
            class="item__image"
            src="../../assets/ramen-menu.svg"
            alt="Picture"
          />
          <img
            v-if="mealType === 'Soup'"
            class="item__image"
            src="../../assets/soup-menu.svg"
            alt="Picture"
          />
          <img
            v-if="mealType === 'Salad'"
            class="item__image"
            src="../../assets/salad-menu.svg"
            alt="Picture"
          />
          <img
            v-if="mealType === 'Rice'"
            class="item__image"
            src="../../assets/rice-menu.svg"
            alt="Picture"
          />
          <div class="main-block__text">
            <h3>{{ mealName }}</h3>
            <h5>{{ mealShortDescription }}</h5>
          </div>
        </div>
        <div class="item__price-mobile">
          <h3 v-if="this.mealSize === 'medium'">
            {{ priceMD }}$ <span>{{ weightMD }}g</span>
          </h3>
          <h3 v-if="this.mealSize === 'large'">
            {{ priceLG }}$ <span>{{ weightLG }}g</span>
          </h3>
          <h3 v-if="this.mealSize === 'xl'">
            {{ priceXL }}$ <span>{{ weightXL }}g</span>
          </h3>
        </div>
        <div class="item__info">
          <AmountSelector />
          <div class="item__meal-size meal-size">
            <button
              @click="this.mealSize = 'medium'"
              :class="this.mealSize === 'medium' ? 'selectedSize' : ''"
              class="meal-size__medium"
            >
              M
            </button>
            <button
              @click="this.mealSize = 'large'"
              :class="this.mealSize === 'large' ? 'selectedSize' : ''"
              class="meal-size__large"
            >
              L
            </button>
            <button
              @click="this.mealSize = 'xl'"
              :class="this.mealSize === 'xl' ? 'selectedSize' : ''"
              class="meal-size__xl"
            >
              XL
            </button>
          </div>
        </div>
        <img
          @click="removeMeal(id)"
          class="button__remove"
          src="../../assets/bin.svg"
          alt="Bin"
        />
      </div>
      <img
        class="cart-items__line"
        src="../../assets/grey-line.svg"
        alt="Line"
      />
    </div>
  </div>
</template>

<script>
import AmountSelector from "./AmountSelector.vue";
export default {
  name: "CartItem",
  props: [
    "mealName",
    "mealShortDescription",
    "weightMD",
    "weightLG",
    "weightXL",
    "priceMD",
    "priceLG",
    "priceXL",
    "mealType",
    "id",
  ],
  components: { AmountSelector },
  data() {
    return {
      mealSize: "large",
      meals: [],
      isAddedToCart: true,
    };
  },
  methods: {
    /** Некорректная реализация */
    removeMeal(id) {
      let storageMeals = JSON.parse(localStorage.getItem("meals"));
      let meals = storageMeals.filter((item) => item.id !== id);
      localStorage.setItem("meals", JSON.stringify(meals));
      this.isAddedToCart = !this.isAddedToCart;
    },
  },
};
</script>

<style scoped>
.cart-items__item {
  display: flex;
  width: 945px;
  justify-content: space-between;
  align-items: center;
}

.cart-items__item-mobile {
  display: none;
}

.cart-items__item .button__remove {
  cursor: pointer;
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

.item__meal-size {
  display: flex;
  gap: 7px;
}

.item__meal-size button {
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
  text-transform: lowercase;
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

.selectedSize {
  color: #f1e2d2;
  background-color: #262524 !important;
}

@media screen and (max-width: 400px) {
  .cart-items__item {
    display: none;
  }

  .cart-items__item-mobile {
    display: flex;
    width: 330px;
    justify-content: space-between;
    align-items: center;
  }

  .item__main-block {
    width: 165px;
    gap: 10px;
  }

  .item__image {
    width: 50px;
    height: 50px;
  }

  .main-block__text h3 {
    font-size: 15px;
  }

  .main-block__text h5 {
    font-size: 11px;
  }

  .item__price-mobile {
    width: 30px;
  }

  .item__price-mobile h3 {
    margin: 0;
    font-size: 15px;
    font-weight: 900;
    text-transform: lowercase;
    text-align: center;
  }

  .item__price-mobile span {
    font-size: 11px;
    font-weight: 400;
  }

  .item__info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .item__meal-size {
    gap: 5px;
  }

  .item__meal-size button {
    width: 23px;
    height: 23px;
    font-size: 11px;
  }

  .cart-items__line {
    width: 330px;
    margin: 15px 0;
  }

  .button__remove {
    width: 20px;
    height: 20px;
  }
}
</style>
