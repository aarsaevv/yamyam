<template>
  <div class="">
    <div class="navbar">
      <div class="navbar__logo">
        <router-link class="navbar__link" to="/"
          ><img src="../../assets/logo.svg" alt="YAMYAM"
        /></router-link>
      </div>
      <div class="navbar__links">
        <router-link class="navbar__link" to="/">Home</router-link>
        <router-link class="navbar__link" to="/menu">Menu</router-link>
        <router-link class="navbar__link" to="/our-story"
          >Our Story</router-link
        >
        <router-link class="navbar__link" to="/contacts">Contacts</router-link>
        <router-link class="navbar__link" to="/cart"
          ><img :src="imageSource[currentSource]" alt="Cart"
        /></router-link>
      </div>
    </div>
    <div class="navbar__mobile">
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
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
  font-size: 18px;
  letter-spacing: 1px;
}

.navbar__mobile {
  display: none;
}

.navbar a {
  text-decoration: none;
  color: #262524;
}

.navbar__links {
  display: flex;
  gap: 56px;
  align-items: center;
}

.navbar__links a {
  transition: 0.2s all;
}

.navbar__link:hover {
  color: #bf3c30;
}

.navbar__link.active {
  color: #bf3c30;
}

@media screen and (max-width: 400px) {
  .navbar {
    display: none;
  }

  .navbar__mobile {
    display: flex;
    justify-content: space-between;
    height: 55px;
  }

  .navbar__links {
    display: flex;
    gap: 30px;
    align-items: center;
  }
}
</style>
