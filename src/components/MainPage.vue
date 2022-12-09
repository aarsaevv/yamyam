<template>
	<div class="container">
		<div class="main-page">
			<Navbar />
			<div class="main">
				<div class="main__block">
					<div class="main__block__text">
						<h1>Hello! こんにちは！</h1>
						<h2><span>Y</span>ummy</h2>
						<h2><span>A</span>romatic</h2>
						<h2><span>M</span>outh-watering</h2>
					</div>
					<div class="main__block__button">
						<div class="button__text">Ramen</div>
						<div class="button__outline"></div>
					</div>
				</div>
				<div class="main__image">
					<img
						src="../assets/ramen-cat-with-noodle.png"
						alt="Ramen" />
				</div>
			</div>
			<div class="footer">
				<div class="footer__buttons">
					<a href="#"
						><img
							src="../assets/instagram-red.svg"
							alt="Instagram"
					/></a>
					<a href="#"
						><img
							src="../assets/facebook-red.svg"
							alt="Facebook"
					/></a>
					<a href="#"
						><img
							src="../assets/twitter-red.svg"
							alt="Twitter"
					/></a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Navbar from "./UI/Navbar.vue";

	export default {
		name: "MainPage",
		components: { Navbar },
	};
</script>
<style scoped>
	.container {
		background-image: url("../assets/background.png");
	}

	.main-page {
		width: 1140px;
		margin: 0 auto;
	}

	.main {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.main__block__text {
		width: 500px;
		margin: 0 0 35px;
	}

	.main__block__text h1 {
		font-size: 48px;
		font-weight: 900;
		text-transform: uppercase;
		margin: 0 0 70px;
	}

	.main__block__text h2 {
		font-size: 38px;
		font-weight: 900;
		text-transform: uppercase;
		margin: 0;
	}

	h2 span {
		color: #bf3c30;
	}

	.main__block__button {
		position: relative;
		margin: 0 0 0 10px;
		width: 240px;
		height: 70px;
		background-color: #bf3c30;
		color: #f1e2d2;
		font-size: 18px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		border: none;
		border-radius: 7px;
	}

	.button__outline {
		position: absolute;
		width: 100%;
		height: 100%;
		border: 2px solid #262524;
		border-radius: 7px;
		top: 7px;
		left: -10px;
		z-index: -1;
	}

	.button__text {
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		top: 25%;
		left: 0;
		right: 0;
		text-align: center;
		font-size: 23px;
	}

	.main__image {
		width: 750px;
		height: 750px;
	}

	.footer {
		display: flex;
		justify-content: center;
	}

	.footer__buttons {
		display: flex;
		gap: 33px;
		align-items: center;
	}
</style>
