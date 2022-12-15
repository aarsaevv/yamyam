<template>
	<div class="navbar">
		<div class="navbar__logo">
			<a href=""
				><img
					src="../../assets/logo.svg"
					alt="YAMYAM"
			/></a>
		</div>
		<div class="navbar__links">
			<router-link
				class="navbar__link"
				to="/"
				>Home</router-link
			>
			<router-link
				class="navbar__link"
				to="/menu"
				>Menu</router-link
			>
			<router-link
				class="navbar__link"
				to="/our-story"
				>Our Story</router-link
			>
			<router-link
				class="navbar__link"
				to="/contacts"
				>Contacts</router-link
			>
			<router-link
				class="navbar__link"
				to="/cart"
				><img
					:src="imageSource[currentSource]"
					alt="Cart"
					@click="changeCartIcon"
			/></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Navbar",
		data() {
			return {
				imageSource: [
					require("@/assets/cart.svg"),
					require("@/assets/red-cart.svg"),
				],
				currentSource: 0,
				currentUrl: window.location.href,
			};
		},
		mounted() {
			if (this.currentUrl == "http://localhost:8080/#/cart") {
				this.currentSource = Number(!Boolean(this.currentSource));
			}
		},
		methods: {
			changeCartIcon() {
				console.log(this.currentUrl);
				// this.currentSource = Number(!Boolean(this.currentSource));
				// console.log(this.currentUrl);
			},
		},
	};
</script>

<style scoped>
	.navbar {
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		letter-spacing: 1px;
	}

	.navbar a {
		text-decoration: none;
		color: #262524;
	}

	.navbar__links {
		display: flex;
		gap: 56px;
		align-items: center;
	}

	.navbar__links a {
		transition: 0.2s all;
	}

	.navbar__link:hover {
		color: #bf3c30;
	}
</style>
