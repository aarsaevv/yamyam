<template>
  <div>
    <div class="navbar">
      <div class="navbar__logo">
        <router-link class="navbar__link" to="/"
        ><img src="@/assets/img/icons/logo.svg" alt="YAMYAM"
        /></router-link>
      </div>
      <div class="navbar__links">
        <router-link class="navbar__link" to="/">Home</router-link>
        <router-link class="navbar__link" to="/menu">Menu</router-link>
        <router-link class="navbar__link" to="/our-story"
        >Our Story
        </router-link
        >
        <router-link class="navbar__link" to="/contacts">Contacts</router-link>
        <router-link class="navbar__link" to="/cart"
        ><img :src="cartIconUrl" alt="Cart"
        /></router-link>
      </div>
    </div>
    <div class="navbar__mobile navbar">
      <div class="navbar__logo">
        <router-link class="navbar__link" to="/"
        ><img src="@/assets/img/icons/logo-mobile.svg" alt="YAMYAM"
        /></router-link>
      </div>
      <div class="navbar__links link">
        <router-link class="link__cart" to="/cart"
        ><img :src="cartIconUrl" alt="Cart"
        /></router-link>
        <div @click="toggleNav()" class="link__burger">
          <img src="@/assets/img/icons/nav-burger.svg" alt="Navigation"/>
        </div>
        <div
            @wheel.prevent
            @touchmove.prevent
            @scroll.prevent
            @click="toggleNav()"
            :class="isMobileNavVisible ? 'active' : 'hidden'"
            class="tint"
        ></div>
        <div
            @wheel.prevent
            @touchmove.prevent
            @scroll.prevent
            :class="isMobileNavVisible ? 'active' : 'hidden'"
            class="link__navigation--mobile"
        >
          <a href="#" @click="toggleNav()" class="navbar__close-button"
          ><img src="@/assets/img/icons/cross.svg" alt="Close"
          /></a>
          <router-link class="navbar__link" to="/">Home</router-link>
          <router-link class="navbar__link" to="/menu">Menu</router-link>
          <router-link class="navbar__link" to="/our-story"
          >Our Story
          </router-link
          >
          <router-link class="navbar__link" to="/contacts"
          >Contacts
          </router-link
          >
          <router-link class="navbar__link" to="/cart">Cart</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {computed, ref} from "vue";

const route = useRoute();

const isMobileNavVisible = ref(false);

const inactiveCartIcon = require('@/assets/img/icons/cart.svg');
const activeCartIcon = require('@/assets/img/icons/red-cart.svg');

const cartIconUrl = computed(() => route.name === 'Cart' ? activeCartIcon : inactiveCartIcon);

const toggleNav = () => {
  isMobileNavVisible.value = !isMobileNavVisible.value;
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

.hidden {
  display: none;
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

  .link__navigation--mobile {
    position: fixed;
    top: 0px;
    right: 0px;
    width: calc(100% - 57vw);
    height: 100%;
    padding: 18px;
    background: #252624;
    color: #f1e2d2;
    z-index: 100;
  }

  .link__navigation--mobile a {
    display: flex;
    justify-content: center;
    padding: 4px 0 16px 0;
    color: #f1e2d2;
  }

  .link__navigation--mobile a:active {
    color: #bf3c30;
  }

  .navbar__close-button {
    position: relative;
    right: -57px;
    top: 2px;
    width: 45px;
  }

  .tint {
    position: fixed;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    width: calc(100% - 40vw);
    top: 0px;
    right: 180px;
    z-index: 99;
  }
}
</style>
