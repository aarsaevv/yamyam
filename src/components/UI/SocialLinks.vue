<template>
	<div class="social-links">
		<a href="#"
			><img
				src="../../assets/instagram.svg"
				alt="Instagram"
		/></a>
		<a href="#"
			><img
				src="../../assets/facebook.svg"
				alt="Facebook"
		/></a>
		<a href="#"
			><img
				src="../../assets/twitter.svg"
				alt="Twitter"
		/></a>
	</div>
</template>

<script>
	export default {
		name: "FooterSocialLinks",
	};
</script>

<style scoped>
	.social-links {
		display: flex;
		gap: 33px;
		align-items: center;
	}
</style>
