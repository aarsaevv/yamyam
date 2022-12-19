<template>
	<router-view />
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
	background-repeat: no-repeat;
	box-sizing: border-box;
}

.page-container__content {
	width: 1140px;
	margin: 0 auto;
}
</style>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDdB-6O1Gd--6xtM9wl9quory9qushT5VI",
	authDomain: "yamyam-f7b3c.firebaseapp.com",
	projectId: "yamyam-f7b3c",
	storageBucket: "yamyam-f7b3c.appspot.com",
	messagingSenderId: "1038634120582",
	appId: "1:1038634120582:web:ab504e8d7dfe892e3da807",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
	name: "App",
};
</script>
