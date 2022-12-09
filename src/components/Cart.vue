<template>
  <div class="container">
    <div class="cart">
      <Navbar />
    </div>
  </div>
</template>

<script>
import Navbar from './UI/Navbar.vue';

export default {
    name: "Cart",
    components: { Navbar }
};
</script>

<style scoped>
  .cart {
    width: 1140px;
    margin: 0 auto;
  }
</style>
