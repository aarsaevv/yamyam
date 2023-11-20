<template>
  <div class="list__item item">
    <div class="item__card card">
      <h3>
        {{ mealName }}
      </h3>
      <img
        v-if="mealType === 'Ramen'"
        class="card__image"
        src="@/assets/img/icons/ramen-menu.svg"
        alt="Picture"
      />
      <img
        v-if="mealType === 'Soup'"
        class="card__image"
        src="@/assets/img/icons/soup-menu.svg"
        alt="Picture"
      />
      <img
        v-if="mealType === 'Salad'"
        class="card__image"
        src="@/assets/img/icons/salad-menu.svg"
        alt="Picture"
      />
      <img
        v-if="mealType === 'Rice'"
        class="card__image"
        src="@/assets/img/icons/rice-menu.svg"
        alt="Picture"
      />
      <p>
        {{ mealDescription }}
      </p>
      <div class="card__price cart">
        <h5 class="cart__price-label">
          {{ mealPriceLarge }}$ / {{ mealWeightLarge }}g
        </h5>
        <h5 class="cart__price-label-mobile">
          {{ mealPriceLarge }}$ <span>{{ mealWeightLarge }}g</span>
        </h5>
        <button v-if="!isAddedToCart" @click="addMeal" class="cart__button">
          <span>Add To Cart</span>
        </button>
        <div v-else-if="isAddedToCart" class="cart__amount-selector remove">
          <AmountSelector />
          <img
            class="remove__button"
            @click="removeMeal"
            src="@/assets/img/icons/bin.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AmountSelector from "./AmountSelector.vue";
export default {
  props: [
    "mealName",
    "mealDescription",
    "mealShortDescription",
    "mealPriceMedium",
    "mealWeightMedium",
    "mealPriceLarge",
    "mealWeightLarge",
    "mealPriceXL",
    "mealWeightXL",
    "mealType",
    "id",
  ],
  methods: {
    addMeal() {
      this.isAddedToCart = !this.isAddedToCart;
      if (localStorage.getItem("meals")) {
        this.meals = JSON.parse(localStorage.getItem("meals"));
      }
      this.meals.push({
        id: this.id,
        quantity: 0,
        type: this.mealType,
        name: this.mealName,
        description: this.mealShortDescription,
        weightMD: this.mealWeightMedium,
        priceMD: this.mealPriceMedium,
        weightLG: this.mealWeightLarge,
        priceLG: this.mealPriceLarge,
        weightXL: this.mealWeightXL,
        priceXL: this.mealPriceXL,
      });
      localStorage.setItem("meals", JSON.stringify(this.meals));
    },
    removeMeal() {
      this.isAddedToCart = !this.isAddedToCart;
      let storageMeals = JSON.parse(localStorage.getItem("meals"));
      this.meals = storageMeals.filter((meal) => meal.id !== this.id);
      localStorage.setItem("meals", JSON.stringify(this.meals));
    },
  },
  components: { AmountSelector },
  data() {
    return {
      meals: [],
      isAddedToCart: false,
    };
  },
};
</script>

<style scoped>
.list__item {
  margin: 25px 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 262px;
  height: 341px;
  border: 3px solid #262524;
  border-radius: 7px;
}

.item__card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 238px;
  height: 310px;
  border: 3px solid #bf3c30;
  border-radius: 7px;
}

.item__card h3 {
  margin: 0 auto;
  font-size: 23px;
  text-transform: uppercase;
}

.item__card p {
  height: 90px;
  letter-spacing: -1px;
  line-height: 18px;
  font-size: 15px;
  text-align: justify;
  text-indent: 15px;
  margin: 0 7px;
}

.cart__button {
  width: 105px;
  height: 33px;
  color: #e3dcc3;
  background-color: #bf3c30;
  border: none;
  border-radius: 7px;
  font-size: 14px;
}

.cart__price-label-mobile {
  display: none;
}

.card__price {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 23px;
}

.card__price h5 {
  font-size: 15px;
  margin: 0 auto;
}

.cart__amount-selector {
  display: flex;
  align-items: center;
  width: 105px;
  height: 33px;
  gap: 5px;
}

.cart__amount-selector .remove__button {
  cursor: pointer;
}

.cart__amount-selector img {
  width: 24px;
}

.added {
  background-color: rgb(128, 128, 128);
}

@media screen and (max-width: 400px) {
  .list__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 154px;
    height: 228px;
    margin: 5px 10px 5px 0;
  }

  .item__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 136px;
    height: 207px;
  }

  .item__card h3 {
    margin: 0 auto;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -1px;
    text-transform: uppercase;
  }

  .item__card p {
    height: 65px;
    letter-spacing: -1px;
    line-height: 11px;
    font-size: 11px;
    text-align: justify;
    text-indent: 15px;
    margin: 0 3px;
  }

  .card__image {
    height: 50px;
    width: 50px;
  }

  .cart__button {
    width: 90px;
    height: 23px;
    font-size: 11px;
  }

  .cart__price-label {
    display: none;
  }

  .cart__price-label-mobile {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 15px;
    margin: 0 auto;
    text-align: center;
    line-height: 13px;
  }

  .cart__price-label-mobile span {
    font-size: 10px;
    font-weight: 400;
  }

  .card__price {
    gap: 7px;
  }

  .cart__amount-selector {
    width: 90px;
    height: 23px;
    gap: 2px;
    justify-content: center;
  }

  .remove__button {
    width: 21px;
    height: 21px;
  }
}
</style>
