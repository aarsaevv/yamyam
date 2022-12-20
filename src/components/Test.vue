<template>
    <div class="page-container">
        <div class="page-container__content">
            <Navbar />
            <h1>Backend Test</h1>
            <p>Здесь будут тестироваться запросы на сервер</p>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/UI/Navbar.vue"
export default {
    name: "Test",
    components: { Navbar },
}
</script>

<style scoped>
.page-container {
    background-color: #e5e5f7;
    opacity: 0.8;
    background-image: radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #f1e2d2 0.5px);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
}
</style>