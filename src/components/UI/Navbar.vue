<template>
  <div class="navbar">
    <div class="navbar__logo">
      <a href=""><img src="../../assets/logo.svg" alt="YAMYAM" /></a>
    </div>
    <div class="navbar__buttons">
      <a href="#">Home</a>
      <a href="#">Menu</a>
      <a href="#">Our Story</a>
      <a href="#">Contacts</a>
      <a href=""><img src="../../assets/cart.svg" alt="Cart" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  letter-spacing: 1px;
}

.navbar a {
  text-decoration: none;
  color: #262524;
}

.navbar__buttons {
  display: flex;
  gap: 56px;
  align-items: center;
}

.navbar__buttons a {
  transition: 0.2s all;
}

.navbar__buttons :hover {
  color: #bf3c30;
}
</style>
