<template>
  <div
    class="about"
    :style="{'background-image': 'url(' + require('../assets/background-story.png') + ')'}">
    <div class="container">
      <div class="navbar">
        <div class="navbar__logo">
          <a href=""><img src="../assets/logo.svg" alt="YAMYAM" /></a>
        </div>
        <div class="navbar__buttons">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Our Story</a>
          <a href="#">Contacts</a>
          <a href=""><img src="../assets/cart.svg" alt="Cart" /></a>
        </div>
      </div>
      <div class="some-space"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OurStory",
};
</script>
<style>

.container {
  width: 1140px;
  margin: 30px auto 0;
}

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

.some-space {
  padding: 0 0 1000px;
}

.main-block {
  display: flex;
  justify-content: space-between;
}

.main-block__text {
  width: 500px;
  height: 548px;
  margin: 100px 0 0;
}

.main-block__text h1 {
  font-size: 58px;
  color: #bf3c30;
  font-weight: 900;
  margin: 0;
}

.main-block__text img {
  margin: 35px 0;
}

.main-block__text h2 {
  font-size: 38px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
}

.main-block__text h4 {
  font-size: 20px;
  font-weight: 400;
  margin: 20px 0;
}

h2 span {
  color: #bf3c30;
}

.main-block__button {
  position: relative;
  margin: 0 0 0 10px;
  width: 240px;
  height: 70px;
  background-color: #bf3c30;
  color: #e3dcc3;
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
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 35%;
  left: 0;
  right: 0;
  text-align: center;
}

.main-block__image img {
  margin: 65px 0;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin: 70px 0 0 0;
}

.footer__buttons {
  display: flex;
  gap: 46px;
  align-items: center;
  font-size: 18px;
  letter-spacing: 1px;
}

.footer__buttons a {
  text-decoration: none;
  color: #262524;
  transition: 0.2s all;
}

.footer__buttons :hover {
  color: #bf3c30;
}

.footer__line {
  display: flex;
  justify-content: center;
}
</style>
