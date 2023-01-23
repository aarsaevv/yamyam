<template>
	<div class="delivery__check">
		<div class="check">
			<h3>Shopping cart</h3>
			<div class="check__image">
				<img
					src="../../assets/mini-line.svg"
					alt="Line" />
			</div>
			<div class="check__delivery delivery">
				<div
					v-for="meal in meals"
					:key="meal.id"
					class="delivery__item">
					<h5>{{ meal.name }}</h5>
					<h5>{{ meal.priceLG }}$</h5>
				</div>
			</div>
			<div class="check__image">
				<img
					src="../../assets/mini-line.svg"
					alt="Line" />
			</div>
			<div class="check__subtotal subtotal">
				<div class="subtotal__item">
					<h5>Subtotal</h5>
					<h5>{{ subtotal }}$</h5>
				</div>
				<div class="subtotal__item">
					<h5>Tax</h5>
					<h5>{{ tax }}$</h5>
				</div>
				<div class="subtotal__item">
					<h5>Delivery</h5>
					<h5>{{ delivery }}$</h5>
				</div>
				<div class="check__image">
					<img
						src="../../assets/mini-line.svg"
						alt="Line" />
				</div>
				<div class="check__total total">
					<div class="total__item">
						<h5>Total</h5>
						<h5>{{ total }}$</h5>
					</div>
				</div>
			</div>
		</div>
		<div class="delivery__button">
			<BigRedButton>PROCEED TO PAY</BigRedButton>
		</div>
	</div>
</template>

<script>
	import BigRedButton from "./BigRedButton.vue";

	export default {
		name: "ShoppingCart",
		components: { BigRedButton },
		props: ["meals"],
		computed: {
			subtotal() {
				let subtotal = 0;
				for (let meal of this.meals) {
					subtotal += meal.priceLG;
				}
				return subtotal;
			},
			tax() {
				let tax = 0;
				for (let meal of this.meals) {
					tax += meal.priceLG;
				}
				tax = Math.round((tax *= 0.045));
				return tax;
			},
			delivery() {
				let delivery = 8;
				return delivery;
			},
			total() {
				let total = this.subtotal + this.tax + this.delivery;
				return total;
			},
		},
	};
</script>

<style scoped>
	.delivery__check {
		display: flex;
		flex-direction: column;
		gap: 60px;
	}

	.check {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 360px;
		padding: 36px 0 36px 0;
		background-color: rgba(255, 255, 255, 0.7);
		border: 2px solid rgba(37, 38, 36, 0.3);
		border-radius: 7px;
	}

	.check h3 {
		display: flex;
		justify-content: center;
		font-size: 30px;
		font-weight: 700;
		text-transform: uppercase;
		margin: 0;
	}

	.check__image {
		display: flex;
		justify-content: center;
		margin: 10px 0;
	}

	.check__delivery {
		width: 300px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 10px;
		margin: 0 auto;
	}

	.delivery__item {
		display: flex;
		justify-content: space-between;
	}

	.check__subtotal {
		width: 300px;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}

	.subtotal__item {
		display: flex;
		justify-content: space-between;
	}

	.total__item {
		display: flex;
		justify-content: space-between;
	}

	.delivery__item h5 {
		font-size: 20px;
		font-weight: 400;
		margin: 0;
	}

	.subtotal__item h5 {
		display: flex;
		font-size: 20px;
		font-weight: 700;
		text-transform: uppercase;
		margin: 0;
	}

	.total__item h5 {
		display: flex;
		font-size: 30px;
		font-weight: 700;
		text-transform: uppercase;
		margin: 0;
	}

	.delivery__button {
		display: flex;
		justify-content: center;
	}

	@media screen and (max-width: 400px) {
		.delivery__check {
			gap: 20px;
		}
		.check {
			width: 330px;
			padding: 30px 0 30px 0;
		}

		.check h3 {
			font-size: 23px;
		}

		.delivery__item h5 {
			font-size: 16px;
		}

		.subtotal__item h5 {
			font-size: 16px;
		}

		.total__item h5 {
			font-size: 23px;
		}
	}
</style>
