<template>
    <button class="block__button button">
        <div class="button__text"><slot></slot></div>
        <div class="button__outline"></div>
    </button>
</template>

<script>
export default {
    name: "BigRedButton",
}
</script>

<style>
.block__button {
    position: relative;
    margin: 0 0 0 10px;
    width: 240px;
    height: 70px;
    background-color: #bf3c30;
    color: #f1e2d2;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: none;
    border-radius: 7px;
}

.button__outline {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #262524;
    border-radius: 7px;
    top: 7px;
    left: -10px;
    z-index: -1;
}

.button__text {
    text-align: center;
    font-size: 22px;
}
</style>