<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/menu">Menu</router-link> |
    <router-link to="/our-story">Our Story</router-link> |
    <router-link to="/contacts">Contacts</router-link> |
    <router-link to="/cart">Cart</router-link> |
  </nav>
  <router-view />
</template>

<style>
body {
  background-color: #f1e2d2;
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  color: #262524;
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
