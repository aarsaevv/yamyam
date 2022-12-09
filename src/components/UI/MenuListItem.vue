<template>
		<div class="list__item item">
			<div class="item__card card">
				<h3>Miso ramen</h3>
				<img
					src="../../assets/ramen-menu.svg"
					alt="Ramen" />
				<p>
					Coming from the Sapporo region of Hokkaido, miso ramen takes its name
					from its main ingredient. This broth is strong and savory and has an
					opaque appearance.
				</p>
				<div class="card__price cart">
					<h5>12$ / 500gr</h5>
					<button class="cart__button">Add to cart</button>
				</div>
			</div>
		</div>
</template>

<script>
	export default {};
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
</style>
