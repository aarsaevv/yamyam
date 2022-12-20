<template>
    <div class="page-container">
        <div class="page-container__content">
            <Navbar />
            <h1>Backend Test</h1>
            <p>Здесь будут тестироваться запросы на сервер</p>
            <div class="content-inputs">
                <form @submit="addObject" ref="submitForm">
                    <input v-model="mealName" type="text" placeholder="Имя" />
                    <input v-model="mealDescription" type="text" placeholder="Описание" />
                    <!-- <input @change="getFile(mealPicture)" type="file" />
                    ^^^ Сюда необходимо добавить картинку блюда -->
                    <input v-model="mealWeight" type="number" />^^^ Масса, g
                    <input v-model="mealPrice" type="number" />^^^ Цена, $
                    <select v-model="mealType">
                        <option value="Ramen">Ramen</option>
                        <option value="Soup">Soup</option>
                        <option value="Rice">Rice</option>
                        <option value="Salad">Salad</option>
                    </select>
                    ^^^ Тип блюда
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

import Navbar from "@/components/UI/Navbar.vue";

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
    name: "Test",
    components: { Navbar },
    data() {
        return {
            mealDescription: "",
            mealIsAddedToCart: false,
            mealName: "",
            mealPicture: "",
            mealPrice: 0,
            mealType: "",
            mealWeight: 0,
        };
    },
    methods: {
        async addObject(event) {
            try {
                await event.preventDefault();
                await this.addMealToFirestore({
                    mealDescription: this.mealDescription,
                    mealIsAddedToCart: this.mealIsAddedToCart,
                    mealName: this.mealName,
                    mealPicture: this.mealPicture,
                    mealPrice: this.mealPrice,
                    mealType: this.mealType,
                    mealWeight: this.mealWeight,
                });
            } catch (err) {
                console.log(err);
            } finally {
                this.$refs.submitForm.reset();
            }
        },
        async addMealToFirestore(object) {
            console.log(object);
            try {
                await addDoc(collection(db, "menu-items"), object);
            } catch (err) {
                console.log(err);
            } finally {
                alert("Данные успешно отправлены");
            }
        },
    },
};
</script>

<style scoped>
.page-container {
    background-color: #e5e5f7;
    opacity: 0.8;
    background-image: radial-gradient(#444cf7 0.5px, transparent 0.5px),
        radial-gradient(#444cf7 0.5px, #f1e2d2 0.5px);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
}

.content-inputs {
    display: flex;
    justify-content: center;
}

.content-inputs form {
    display: flex;
    flex-direction: column;
    width: 66%;
}

.content-inputs input {
    margin: 5px 0 5px 0;
    padding: 10px 0;
    font-size: 24px;
}

.content-inputs select {
    margin: 5px 0 5px 0;
    padding: 10px 0;
    font-size: 24px;
}

.content-inputs button {
    margin: 5px 0 5px 0;
    padding: 10px 0;
    font-size: 24px;
}
</style>
