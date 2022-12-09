<template>
	<div class="container">
		<div class="our-menu">
			<Navbar />
			<div class="menu">
				<div class="menu__navigation">
					<a href="#">ramen 拉麺</a>
					<a href="#">soup スープ</a>
					<a href="#">rice ご飯</a>
					<a href="#">salad サラダ</a>
				</div>
				<div class="menu__list list">
					<MenuListItem />
					<MenuListItem />
					<MenuListItem />
					<MenuListItem />
					<MenuListItem />
					<MenuListItem />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import MenuListItem from "./UI/MenuListItem.vue";
	import Navbar from "./UI/Navbar.vue";

	export default {
		name: "Menu",
		components: { Navbar, MenuListItem },
	};
</script>
<style scoped>
	.container {
		background-image: url("../assets/background.png");
	}

	.our-menu {
		width: 1140px;
		margin: 0 auto;
	}

	.menu__navigation {
		display: flex;
		justify-content: space-between;
		margin: 25px 0 0 0;
		font-size: 37px;
		font-weight: 900;
	}

	.menu__navigation a {
		color: #262524;
		text-decoration: none;
		text-transform: uppercase;
	}

	.menu__list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
