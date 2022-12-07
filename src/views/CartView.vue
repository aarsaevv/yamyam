<template>
    <Cart />
  </template>
  
  <script>
  import Cart from "@/components/Cart.vue";
  import MainPage from "@/components/MainPage.vue";
  export default {
    name: "HomeView",
    components: {
    MainPage,
    Cart
},
  };
  </script>