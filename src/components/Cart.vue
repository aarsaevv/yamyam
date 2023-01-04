<template>
	<div class="page-container">
		<div class="page-container__content">
			<Navbar />
			<div class="cart">
				<h2>Your cart あなたのカート</h2>
				<div
					v-if="cartIsEmpty"
					class="cart__empty">
					Cart is empty.
				</div>
				<div
					v-else
					class="cart__items">
					<CartItem
						v-for="meal in meals"
						:key="meal.id"
						:mealName="meal.name"
						:mealShortDescription="meal.description"
						:mealPicture="meal.mealPicture"
						:priceMD="meal.priceMD"
						:weightMD="meal.weightMD"
						:priceLG="meal.priceLG"
						:weightLG="meal.weightLG"
						:priceXL="meal.priceXL"
						:weightXL="meal.weightXL"
						:mealType="meal.type"
						:id="meal.id" />
				</div>
				<h2 v-if="meals.length">delivery 配達</h2>
				<div
					v-if="meals.length"
					class="delivery">
					<DeliveryInfo />
					<ShoppingCart :meals="meals" />
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
		computed: {
			cartIsEmpty() {
				return localStorage.getItem("meals") === "[]";
			},
		},
		mounted() {
			this.getOrderedFromMenu();
		},
		methods: {
			async getOrderedFromMenu() {
				if (localStorage.getItem("meals")) {
					this.meals = JSON.parse(localStorage.getItem("meals"));
					localStorage.setItem("meals", JSON.stringify(this.meals));
				}
			},
		},
	};
</script>
<style scoped>
	.page-container {
		background-image: url("../assets/background-cart-1920.png");
		background-repeat: repeat;
		min-height: 100vh;
		height: 100%;
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

	.cart__items {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.cart__empty {
		text-align: center;
	}

	.delivery {
		display: flex;
		justify-content: center;
		gap: 98px;
	}

	@media screen and (max-width: 1540px) {
		.page-container {
			background-image: url("../assets/background-cart-1536.png");
			background-repeat: repeat;
		}
	}
</style>
