<template>
	<div class="list__item item">
		<div class="item__card card">
			<h3>
				{{ mealName }}
			</h3>
			<img
				v-if="mealType === 'Ramen'"
				src="../../assets/ramen-menu.svg"
				alt="Picture" />
			<img
				v-if="mealType === 'Soup'"
				src="../../assets/soup-menu.svg"
				alt="Picture" />
			<img
				v-if="mealType === 'Salad'"
				src="../../assets/salad-menu.svg"
				alt="Picture" />
			<img
				v-if="mealType === 'Rice'"
				src="../../assets/rice-menu.svg"
				alt="Picture" />
			<p>
				{{ mealDescription }}
			</p>
			<div class="card__price cart">
				<h5>{{ mealPriceLarge }}$ / {{ mealWeightLarge }}g</h5>
				<button
					v-if="!isAddedToCart"
					@click="addMeal"
					class="cart__button">
					<span>Add To Cart</span>
				</button>
				<div
					v-else-if="isAddedToCart"
					class="cart__amount-selector remove">
					<AmountSelector />
					<img
						class="remove__button"
						@click="removeMeal"
						src="../../assets/bin.svg" />
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
			"mealPriceLarge",
			"mealWeightLarge",
			"mealType",
			"id",
		],
		methods: {
			addMeal() {
				this.isAddedToCart = !this.isAddedToCart;
				let meals = [];
				if (localStorage.getItem("meals")) {
					meals = JSON.parse(localStorage.getItem("meals"));
				}
				meals.push({
					id: this.id,
					quantity: 0,
					type: this.mealType,
					name: this.mealName,
					description: this.mealShortDescription,
					weight: this.mealWeightLarge,
					price: this.mealPriceLarge,
				});
				localStorage.setItem("meals", JSON.stringify(meals));
			},
			removeMeal() {
				this.isAddedToCart = !this.isAddedToCart;
				let storageMeals = JSON.parse(localStorage.getItem("meals"));
				let meals = storageMeals.filter((meal) => meal.id !== this.id);
				localStorage.setItem("meals", JSON.stringify(meals));
			},
		},
		components: { AmountSelector },
		data() {
			return {
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

	.card__price {
		display: flex;
		align-items: center;
		gap: 15px;
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
		background-color: gray;
	}
</style>
