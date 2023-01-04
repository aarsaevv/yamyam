<template>
  <div class="navbar">
    <div class="navbar__logo">
      <router-link class="navbar__link" to="/"
        ><img src="../../assets/logo-mobile.svg" alt="YAMYAM"
      /></router-link>
    </div>
    <div class="navbar__links">
      <router-link class="navbar__link" to="/cart"
        ><img :src="imageSource[currentSource]" alt="Cart"
      /></router-link>
      <router-link class="navbar__link" to="/"
        ><img src="../../assets/nav-burger.svg" alt="Navigation"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarMobile",
  data() {
    return {
      imageSource: [
        require("@/assets/cart.svg"),
        require("@/assets/red-cart.svg"),
      ],
      currentSource: 0,
    };
  },
  mounted() {
    if (window.location.href.includes("/cart")) {
      this.currentSource = Number(!Boolean(this.currentSource));
    }
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 55px;
}

.navbar__links {
  display: flex;
  gap: 30px;
  align-items: center;
}
</style>
