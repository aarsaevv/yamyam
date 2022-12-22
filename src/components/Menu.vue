<template>
	<div class="page-container">
		<div class="page-container__content">
			<Navbar />
			<div class="menu">
				<div class="menu__navigation">
					<router-link to="/menu/ramen">
						<span :class="this.$route.path === '/menu/ramen' ? 'active' : ''"
							>ramen 拉麺</span
						>
					</router-link>
					<router-link
						to="/menu/soup">
						<span :class="this.$route.path === '/menu/soup' ? 'active' : ''"
							>soup スープ</span
						>
					</router-link>
					<router-link
						to="/menu/rice">
						<span :class="this.$route.path === '/menu/rice' ? 'active' : ''"
							>rice ご飯</span
						>
					</router-link>
					<router-link
						to="/menu/salad">
						<span :class="this.$route.path === '/menu/salad' ? 'active' : ''"
							>salad サラダ</span
						>
					</router-link>
				</div>
				<div class="menu__list">
					<div
						v-for="meal in meals"
						class="list__item item">
						<MenuListItem
							v-if="
								this.$route.path === '/menu/ramen' && meal.mealType == 'Ramen'
							"
							:mealName="meal.mealName"
							:mealDescription="meal.mealDescription"
							:mealPicture="meal.mealPicture"
							:mealPriceLarge="meal.mealPriceLarge"
							:mealWeightLarge="meal.mealWeightLarge"
							:mealType="meal.mealType"
							:mealIsAddedToCart="meal.mealIsAddedToCart" />
						<MenuListItem
							v-else-if="
								this.$route.path === '/menu/soup' && meal.mealType == 'Soup'
							"
							:mealName="meal.mealName"
							:mealDescription="meal.mealDescription"
							:mealPicture="meal.mealPicture"
							:mealPriceLarge="meal.mealPriceLarge"
							:mealWeightLarge="meal.mealWeightLarge"
							:mealType="meal.mealType"
							:mealIsAddedToCart="meal.mealIsAddedToCart" />
						<MenuListItem
							v-else-if="
								this.$route.path === '/menu/rice' && meal.mealType == 'Rice'
							"
							:mealName="meal.mealName"
							:mealDescription="meal.mealDescription"
							:mealPicture="meal.mealPicture"
							:mealPriceLarge="meal.mealPriceLarge"
							:mealWeightLarge="meal.mealWeightLarge"
							:mealType="meal.mealType"
							:mealIsAddedToCart="meal.mealIsAddedToCart" />
						<MenuListItem
							v-else-if="
								this.$route.path === '/menu/salad' && meal.mealType == 'Salad'
							"
							:mealName="meal.mealName"
							:mealDescription="meal.mealDescription"
							:mealPicture="meal.mealPicture"
							:mealPriceLarge="meal.mealPriceLarge"
							:mealWeightLarge="meal.mealWeightLarge"
							:mealType="meal.mealType"
							:mealIsAddedToCart="meal.mealIsAddedToCart" />
						<MenuListItem
							v-else-if="this.$route.path === '/menu'"
							:mealName="meal.mealName"
							:mealDescription="meal.mealDescription"
							:mealPicture="meal.mealPicture"
							:mealPriceLarge="meal.mealPriceLarge"
							:mealWeightLarge="meal.mealWeightLarge"
							:mealType="meal.mealType"
							:mealIsAddedToCart="meal.mealIsAddedToCart" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { initializeApp } from "firebase/app";
	import { getFirestore } from "firebase/firestore";
	import { collection, getDocs } from "firebase/firestore";
	import Navbar from "./UI/Navbar.vue";
	import MenuListItem from "./UI/MenuListItem.vue";

	const firebaseConfig = {
		apiKey: "AIzaSyDdB-6O1Gd--6xtM9wl9quory9qushT5VI",
		authDomain: "yamyam-f7b3c.firebaseapp.com",
		projectId: "yamyam-f7b3c",
		storageBucket: "yamyam-f7b3c.appspot.com",
		messagingSenderId: "1038634120582",
		appId: "1:1038634120582:web:ab504e8d7dfe892e3da807",
	};
	const app = initializeApp(firebaseConfig);

	const db = getFirestore(app);

	export default {
		name: "Menu",
		components: { Navbar, MenuListItem },
		data() {
			return {
				mealDescription: "",
				mealIsAddedToCart: false,
				mealName: "",
				mealPicture: "",
				mealPriceLarge: 0,
				mealType: "",
				mealWeightMedium: 0,
				mealWeightLarge: 0,
				mealWeightXL: 0,
				mealShortDescription: "",
				mealSize: "",
				mealQuantity: 0,
				meals: [],
			};
		},
		mounted() {
			this.getMealsFromDatabase();
		},
		methods: {
			async getMealsFromDatabase() {
				const querySnapshot = await getDocs(collection(db, "menu-items"));
				querySnapshot.forEach((document) => {
					this.meals.push(document.data());
				});
			},
		},
	};
</script>
<style scoped>
	.page-container {
		background-image: url("../assets/background-main-1920.png");
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
	}

	.active {
		color: #bf3c30;
	}

	@media screen and (max-width: 1540px) {
		.page-container {
			background-image: url("../assets/background-main-1536.png");
		}
	}
</style>
