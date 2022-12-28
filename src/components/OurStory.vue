<template>
	<div class="page-container">
		<div class="page-container__content">
			<Navbar />
			<div class="story">
				<div class="story__title text">
					<h2 class="text__header">About Us 私たちに関しては</h2>
					<h6 class="text__body">
						Ramen is Chinese in origin.<br />
						The name was originally used for two other dishes, namely Chūka soba
						and Shina soba. Both translate to “Chinese noodle”, but with
						different connotations. Japan only co-opted the term in the late
						19th century, when the country was going through an industrial
						revolution. Since workers (also known as “salarymen” back then)
						barely had the time to prepare their own meals before leaving for
						work, they instead ate in ramen restaurants.
					</h6>
				</div>
				<div class="story__title-right text">
					<h2 class="text__header">Our team 私たちのチーム</h2>
					<h6 class="text__body">
						Ramen is Chinese in origin.<br />
						The name was originally used for two other dishes, namely Chūka soba
						and Shina soba. Both translate to “Chinese noodle”, but with
						different connotations. Japan only co-opted the term in the late
						19th century, when the country was going through an industrial
						revolution. Since workers (also known as “salarymen” back then)
						barely had the time to prepare their own meals before leaving for
						work, they instead ate in ramen restaurants.
					</h6>
				</div>
				<div class="story__title text">
					<h2 class="text__header">Our values 私達の価値</h2>
					<h6 class="text__body">
						Ramen is Chinese in origin.<br />
						The name was originally used for two other dishes, namely Chūka soba
						and Shina soba. Both translate to “Chinese noodle”, but with
						different connotations. Japan only co-opted the term in the late
						19th century, when the country was going through an industrial
						revolution. Since workers (also known as “salarymen” back then)
						barely had the time to prepare their own meals before leaving for
						work, they instead ate in ramen restaurants.
					</h6>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Navbar from "./UI/Navbar.vue";

	export default {
		name: "OurStory",
		components: { Navbar },
	};
</script>
<style scoped>
	.page-container {
		background-image: url("../assets/background-story-1920.png");
	}

	.page-container__content {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.story {
		display: flex;
		flex-direction: column;
		gap: 50px;
		margin: 0 0 25px;
	}

	.story__title {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
		width: 760px;
		height: 222px;
		text-align: justify;
	}

	.story__title-right {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		margin-left: auto;
		gap: 15px;
		width: 760px;
		height: 222px;
		text-align: right;
	}

	.text__header {
		font-size: 38px;
		font-weight: 900;
		text-transform: uppercase;
		margin: 0;
	}

	.text__body {
		font-size: 18px;
		font-weight: 400;
		margin: 0;
	}

	@media screen and (max-width: 1540px) {
		.page-container {
			background-image: url("../assets/background-story-1536.png");
			height: 100%;
		}
	}
</style>
