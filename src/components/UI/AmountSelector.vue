<template>
	<div class="item__buttons-amount">
		<button @click="decreaseAmountCounter">-</button>
		{{ this.amountCounter }}
		<button @click="increaseAmountCounter">+</button>
	</div>
</template>

<script>
	export default {
		name: "AmountSelector",
		data() {
			return {
				amountCounter: 1,
			};
		},
		methods: {
			increaseAmountCounter() {
				if (this.amountCounter < 8) {
					this.amountCounter++;
				}
			},
			decreaseAmountCounter() {
				if (this.amountCounter > 1) {
					this.amountCounter--;
				}
			},
		},
	};
</script>

<style scoped>
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

	@media screen and (max-width: 400px) {
		.item__buttons-amount button {
			width: 23px;
			height: 23px;
			font-size: 15px;
		}

		.item__buttons-amount h5 {
			font-size: 15px;
		}
	}
</style>
