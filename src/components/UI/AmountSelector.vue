<template>
	<div class="item__buttons-amount">
		<button @click="increaseAmountCounter">+</button>
		{{ this.amountCounter }}
		<button @click="decreaseAmountCounter">-</button>
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
</style>
