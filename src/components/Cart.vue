<template>
	<div class="page-container">
		<div class="page-container__content">
			<Navbar />
			<div class="cart">
				<h2>Your cart あなたのカート</h2>
				<div class="cart-items">
					<div class="cart-items__item">
						<div class="item__main-block">
							<img
								src="../assets/ramen-menu.svg"
								alt="Ramen" />
							<div class="main-block__text">
								<h3>Miso ramen</h3>
								<h5>Rich soup but a little bit spicy</h5>
							</div>
						</div>
						<div class="item__buttons-size">
							<button>M</button>
							<button>L</button>
							<button>XL</button>
						</div>
						<div class="item__price">
							<h3>12$</h3>
						</div>
						<div class="item__buttons-amount">
							<button>+</button>
							<h5>1</h5>
							<button>-</button>
						</div>
						<img
							src="../assets/cross.svg"
							alt="Cross" />
					</div>
					<img
						class="cart-items__line"
						src="../assets/grey-line.svg"
						alt="Line" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from "./UI/Navbar.vue";
	export default {
		name: "Cart",
		components: { Navbar },
	};
</script>

<style scoped>
	.cart h2 {
		display: flex;
		justify-content: center;
		margin: 30px 0;
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

	.cart-items__item {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 76px;
	}

	.item__main-block {
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

	.item__buttons-size {
		display: flex;
		gap: 7px;
	}

	.item__buttons-size button {
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
		text-transform: uppercase;
	}

	.item__buttons-amount {
		display: flex;
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
</style>
