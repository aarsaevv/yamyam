<template>
	<div class="page-container">
		<div class="page-container__content">
			<Navbar />
			<div class="main-page">
				<div class="main-page__content main">
					<div class="main__block block">
						<div class="block__text">
							<h1>Hello! こんにちは！</h1>
							<h2><span>Y</span>ummy</h2>
							<h2><span>A</span>romatic</h2>
							<h2><span>M</span>outh-watering</h2>
						</div>
						<button class="block__button button">
							<div class="button__text">Ramen</div>
							<div class="button__outline"></div>
						</button>
					</div>
					<div class="main__image">
						<img
							src="../assets/ramen-cat-with-noodle.png"
							alt="Ramen" />
					</div>
				</div>
				<div class="main-page__footer social">
					<div class="social__links">
						<SocialLinks />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Navbar from "./UI/Navbar.vue";
	import SocialLinks from "./UI/SocialLinks.vue";
	export default {
		name: "MainPage",
		components: { Navbar, SocialLinks },
	};
</script>
<style scoped>
	.page-container {
		background-image: url("../assets/background.png");
	}

	.main-page {
		display: flex;
		flex-direction: column;
	}

	.main-page__content {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.block__text {
		width: 500px;
		margin: 0 0 35px;
	}

	.block__text h1 {
		font-size: 48px;
		font-weight: 900;
		text-transform: uppercase;
		margin: 0 0 70px;
	}

	.block__text h2 {
		font-size: 38px;
		font-weight: 900;
		text-transform: uppercase;
		margin: 0;
	}

	h2 span {
		color: #bf3c30;
	}

	.block__button {
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
		height: 100%;
	}

	.main-page__footer {
		display: flex;
		justify-content: center;
	}

	.social__links {
		filter: invert(30%) sepia(20%) saturate(6271%) hue-rotate(342deg)
			brightness(87%) contrast(86%);
	}
</style>
