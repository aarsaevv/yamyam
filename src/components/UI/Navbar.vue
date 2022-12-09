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
			<router-link to="/">Home</router-link>
			<router-link to="/menu">Menu</router-link>
			<router-link to="/our-story">Our Story</router-link>
			<router-link to="/contacts">Contacts</router-link>
      		<router-link to="/cart"><img src="../../assets/cart.svg" alt="Cart"></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Navbar",
	};
</script>

<style>
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

	.navbar__links:hover {
		color: #bf3c30;
	}
</style>
