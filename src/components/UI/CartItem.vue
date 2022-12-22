<template>
	<div>
		<div class="cart-items__item">
			<div class="item__main-block">
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
				<div class="main-block__text">
					<h3>{{ mealName }}</h3>
					<h5>{{ mealShortDescription }}</h5>
				</div>
			</div>
			<div class="item__meal-size meal-size">
				<button
          @click="this.mealSize = 'medium'"
					:class="this.mealSize === 'medium' ? 'selectedSize' : ''"
          class="meal-size__medium">
					M
				</button>
				<button
          @click="this.mealSize = 'large'"
					:class="this.mealSize === 'large' ? 'selectedSize' : ''"
					class="meal-size__large">
					L
				</button>
				<button
          @click="this.mealSize = 'xl'"
					:class="this.mealSize === 'xl' ? 'selectedSize' : ''"
					class="meal-size__xl">
					XL
				</button>
			</div>
			<div class="item__price">
				<h3 v-if="this.mealSize === 'medium'">{{ mealPriceMedium }}$ / {{ mealWeightMedium }}g</h3>
				<h3 v-if="this.mealSize === 'large'">{{ mealPriceLarge }}$ / {{ mealWeightLarge }}g</h3>
				<h3 v-if="this.mealSize === 'xl'">{{ mealPriceXL }}$ / {{ mealWeightXL }}g</h3>

			</div>
			<AmountSelector />
			<img
				src="../../assets/cross.svg"
				alt="Cross" />
		</div>
		<img
			class="cart-items__line"
			src="../../assets/grey-line.svg"
			alt="Line" />
	</div>
</template>

<script>
	import AmountSelector from "./AmountSelector.vue";
	export default {
		name: "CartItem",
		props: [
			"mealName",
			"mealShortDescription",
			"mealWeightMedium",
			"mealWeightLarge",
			"mealWeightXL",
			"mealPriceMedium",
			"mealPriceLarge",
			"mealPriceXL",
			"mealType",
		],
		components: { AmountSelector },
		data() {
			return {
				mealSize: "large",
			};
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
    background-color: #262524!important;
  }
</style>
