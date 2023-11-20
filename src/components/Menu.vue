<template>
  <div class="page-container">
    <div class="page-container__content">
      <Navbar/>
      <div class="menu">
        <div class="menu__navigation">
          <router-link to="/menu/ramen">
						<span :class="this.$route.path === '/menu/ramen' ? 'active' : ''"
            >ramen 拉麺</span
            >
          </router-link>
          <router-link to="/menu/soup">
						<span :class="this.$route.path === '/menu/soup' ? 'active' : ''"
            >soup スープ</span
            >
          </router-link>
          <router-link to="/menu/rice">
						<span :class="this.$route.path === '/menu/rice' ? 'active' : ''"
            >rice ご飯</span
            >
          </router-link>
          <router-link to="/menu/salad">
						<span :class="this.$route.path === '/menu/salad' ? 'active' : ''"
            >salad サラダ</span
            >
          </router-link>
        </div>
        <div class="menu__list list">
          <div
              v-if="meals.length"
              v-for="meal in meals">
            <MenuListItem
                v-if="
								this.$route.path === '/menu/ramen' && meal.mealType === 'Ramen'
							"
                :mealName="meal.mealName"
                :mealDescription="meal.mealDescription"
                :mealShortDescription="meal.mealShortDescription"
                :mealPicture="meal.mealPicture"
                :mealPriceMedium="meal.mealPriceMedium"
                :mealWeightMedium="meal.mealWeightMedium"
                :mealPriceLarge="meal.mealPriceLarge"
                :mealWeightLarge="meal.mealWeightLarge"
                :mealPriceXL="meal.mealPriceXL"
                :mealWeightXL="meal.mealWeightXL"
                :mealType="meal.mealType"
                :id="meal.id"/>
            <MenuListItem
                v-else-if="
								this.$route.path === '/menu/soup' && meal.mealType === 'Soup'
							"
                :mealName="meal.mealName"
                :mealDescription="meal.mealDescription"
                :mealShortDescription="meal.mealShortDescription"
                :mealPicture="meal.mealPicture"
                :mealPriceMedium="meal.mealPriceMedium"
                :mealWeightMedium="meal.mealWeightMedium"
                :mealPriceLarge="meal.mealPriceLarge"
                :mealWeightLarge="meal.mealWeightLarge"
                :mealPriceXL="meal.mealPriceXL"
                :mealWeightXL="meal.mealWeightXL"
                :mealType="meal.mealType"
                :id="meal.id"/>
            <MenuListItem
                v-else-if="
								this.$route.path === '/menu/rice' && meal.mealType === 'Rice'
							"
                :mealName="meal.mealName"
                :mealDescription="meal.mealDescription"
                :mealShortDescription="meal.mealShortDescription"
                :mealPicture="meal.mealPicture"
                :mealPriceMedium="meal.mealPriceMedium"
                :mealWeightMedium="meal.mealWeightMedium"
                :mealPriceLarge="meal.mealPriceLarge"
                :mealWeightLarge="meal.mealWeightLarge"
                :mealPriceXL="meal.mealPriceXL"
                :mealWeightXL="meal.mealWeightXL"
                :mealType="meal.mealType"
                :id="meal.id"/>
            <MenuListItem
                v-else-if="
								this.$route.path === '/menu/salad' && meal.mealType === 'Salad'
							"
                :mealName="meal.mealName"
                :mealDescription="meal.mealDescription"
                :mealShortDescription="meal.mealShortDescription"
                :mealPicture="meal.mealPicture"
                :mealPriceMedium="meal.mealPriceMedium"
                :mealWeightMedium="meal.mealWeightMedium"
                :mealPriceLarge="meal.mealPriceLarge"
                :mealWeightLarge="meal.mealWeightLarge"
                :mealPriceXL="meal.mealPriceXL"
                :mealWeightXL="meal.mealWeightXL"
                :mealType="meal.mealType"
                :id="meal.id"/>
            <MenuListItem
                v-else-if="this.$route.path === '/menu'"
                :mealName="meal.mealName"
                :mealDescription="meal.mealDescription"
                :mealShortDescription="meal.mealShortDescription"
                :mealPicture="meal.mealPicture"
                :mealPriceMedium="meal.mealPriceMedium"
                :mealWeightMedium="meal.mealWeightMedium"
                :mealPriceLarge="meal.mealPriceLarge"
                :mealWeightLarge="meal.mealWeightLarge"
                :mealPriceXL="meal.mealPriceXL"
                :mealWeightXL="meal.mealWeightXL"
                :mealType="meal.mealType"
                :id="meal.id"/>
          </div>
          <div v-else>
            <Preloader/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {collection, getDocs} from "firebase/firestore";
import {db} from "@/../firebase.init.js";
import Navbar from "./UI/Navbar.vue";
import MenuListItem from "./UI/MenuListItem.vue";
import Preloader from "./UI/Preloader.vue";
import {onBeforeMount, ref} from "vue";

const meals = ref([]);
const arrayOfIDs = ref([]);

const getMealsFromDatabase = async () => {
  const querySnapshot = await getDocs(collection(db, "menu-items"));
  querySnapshot.forEach((document) => {
    meals.value.push(document.data());
    arrayOfIDs.value.push(document.id);
  });
  meals.value.map((document, index) => {
    return arrayOfIDs[index];
  });
}

onBeforeMount(() => {
  getMealsFromDatabase()
})
</script>

<style scoped>
.page-container {
  background-image: url("@/assets/img/backgrounds/background-main-1920.png");
}

.menu__navigation {
  display: flex;
  justify-content: space-between;
  margin: 25px 0 0 0;
  font-size: 37px;
  font-weight: 900;
}

.menu__navigation a {
  color: #262524;
  text-decoration: none;
  text-transform: uppercase;
}

.menu__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 0 20px 0;
}

.active {
  color: #bf3c30;
}

@media screen and (max-width: 1540px) {
  .page-container {
    background-image: url("@/assets/img/backgrounds/background-main-1536.png");
    background-size: cover;
  }
}

@media screen and (max-width: 400px) {
  .page-container {
    background: #f1e2d2;
  }

  .menu__navigation {
    flex-wrap: wrap;
    font-size: 23px;
    margin: 20px 0 5px;
  }

  .menu__list {
    justify-content: flex-start;
    width: 350px;
  }
}
</style>
