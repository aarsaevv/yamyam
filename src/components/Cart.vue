<template>
	<div class="page-container">
		<div class="page-container__content">
			<Navbar />
			<div class="cart">
				<h2>Your cart あなたのカート</h2>
				<div class="cart-items">
					<CartItem
						v-if="mealIsAddedToCart === false"
						v-for="meal in meals"
						:mealIsAddedToCart="meal.mealIsAddedToCart"
						:mealName="meal.mealName"
						:mealShortDescription="meal.mealShortDescription"
						:mealPicture="meal.mealPicture"
						:mealPriceMedium="meal.mealPriceMedium"
						:mealPriceLarge="meal.mealPriceLarge"
						:mealPriceXL="meal.mealPriceXL"
						:mealWeightMedium="meal.mealWeightMedium"
						:mealWeightLarge="meal.mealWeightLarge"
						:mealWeightXL="meal.mealWeightXL"
						:mealType="meal.mealType" />
					<div v-else>Cart is empty.</div>
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
	import { initializeApp } from "firebase/app";
	import { getFirestore } from "firebase/firestore";
	import { collection, getDocs } from "firebase/firestore";
	import Navbar from "./UI/Navbar.vue";
	import CartItem from "./UI/CartItem.vue";
	import DeliveryInfo from "./UI/DeliveryInfo.vue";
	import DeliveryCheck from "./UI/DeliveryCheck.vue";

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
		name: "Cart",
		components: { Navbar, CartItem, DeliveryInfo, DeliveryCheck },
		data() {
			return {
				mealIsAddedToCart: false,
				mealName: "",
				mealPriceMedium: 0,
				mealPriceLarge: 0,
				mealPriceXL: 0,
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
		background-image: url("../assets/background-cart-1920.png");
		height: 100%;
		background-size: cover;
	}

	@media screen and (max-width: 1540px) {
		.page-container {
			background-image: url("../assets/background-cart-1536.png");
			background-size: contain;
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
