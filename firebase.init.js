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

export const db = getFirestore(app);