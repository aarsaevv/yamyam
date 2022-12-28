<template>
	<div class="page-container">
		<div class="page-container__content">
			<Navbar />
			<div class="cart">
				<h2>Your cart あなたのカート</h2>
				<div class="cart-items">
					<CartItem
						v-if="this.meals.length"
						v-for="meal in meals"
						:mealName="meal.name"
						:mealShortDescription="meal.description"
						:mealPicture="meal.mealPicture"
						:mealPriceLarge="meal.price"
						:mealWeightLarge="meal.weight"
						:mealType="meal.type"
						:id="meal.id" />
					<div v-else>Cart is empty.</div>
				</div>
				<h2>delivery 配達</h2>
				<div class="delivery">
					<DeliveryInfo />
					<ShoppingCart />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from "./UI/Navbar.vue";
	import CartItem from "./UI/CartItem.vue";
	import DeliveryInfo from "./UI/DeliveryInfo.vue";
	import ShoppingCart from "./UI/ShoppingCart.vue";

	export default {
		name: "Cart",
		components: { Navbar, CartItem, DeliveryInfo, ShoppingCart },
		data() {
			return {
				meals: [],
			};
		},
		mounted() {
			this.getOrderedFromMenu();
		},
		methods: {
			async getOrderedFromMenu() {
				if (localStorage.getItem("meals")) {
					this.meals = JSON.parse(localStorage.getItem("meals"));
					localStorage.setItem("meals", JSON.stringify(meals));
				}
			},
		},
	};
</script>
<style scoped>
	.page-container {
		background-image: url("../assets/background-cart-1920.png");
		height: 100%;
		background-repeat: repeat;
	}

	@media screen and (max-width: 1540px) {
		.page-container {
			background-image: url("../assets/background-cart-1536.png");
			background-repeat: repeat;
		}
	}

	.cart {
		padding-bottom: 30px;
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
