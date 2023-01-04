<template>
	<router-view :key="$route.fullPath" />
</template>

<style>
* {
	font-family: "Noto Sans", sans-serif;
}

body {
	background-color: #f1e2d2;
	font-weight: 400;
	color: #262524;
	margin: 0;
	padding: 0;
}

.page-container {
	padding-top: 30px;
	padding-left: calc(100vw - 100%);
	height: 100vh;
	width: 100%;
	box-sizing: border-box;
}

.page-container__content {
	width: 1140px;
	margin: 0 auto;
}

.page-container__content-mobile {
	width: 330px;
	margin: 0 auto;
}
</style>

<script>
</script>