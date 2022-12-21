<template>
	<div class="list__item item">
		<div class="item__card card">
			<h3>
				{{ mealName }}
			</h3>
			<img v-if="mealType === 'Ramen'" src="../../assets/ramen-menu.svg" alt="Picture" />
			<img v-if="mealType === 'Soup'" src="../../assets/soup-menu.svg" alt="Picture" />
			<img v-if="mealType === 'Salad'" src="../../assets/salad-menu.svg" alt="Picture" />
			<img v-if="mealType === 'Rice'" src="../../assets/rice-menu.svg" alt="Picture" />
			<p>
				{{ mealDescription }}
			</p>
			<div class="card__price cart">
				<h5>{{ mealPrice }}$ / {{ mealWeight }}g</h5>
				<button @click="addToCart" :class="isAdded ? 'added' : ''" class="cart__button">
					<span v-if="!isAdded">Add To Cart</span>
					<span v-else>Added To Cart</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['mealName', 'mealDescription', 'mealPrice', 'mealWeight', 'mealType', 'mealIsAddedToCart'],
	methods: {
		addToCart() {
			this.isAdded = !this.isAdded;
		}
	},
	data() {
		return {
			isAdded: this.mealIsAddedToCart,
		}
	}
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

.added {
	background-color: gray;
}
</style>
