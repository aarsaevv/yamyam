<template>
  <div
    class="home" :style="{'background-image': 'url(' + require('../assets/background.png') + ')'}">
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
      <div class="main">
        <div class="main__block">
          <div class="main__block__text">
          <h1>Hello! こんにちは！</h1>
          <h2><span>Y</span>ummy</h2>
          <h2><span>A</span>romatic</h2>
          <h2><span>M</span>outh-watering</h2>
        </div>
        <div class="main__block__button">
          <div class="button__text">Ramen</div>
          <div class="button__outline"></div>
        </div>
        </div>
        <div class="main__image">
          <img src="../assets/ramen-cat-with-noodle.png" alt="Ramen" />
        </div>
      </div>
      <div class="footer">
        <div class="footer__buttons">
          <a href="#"><img src="../assets/instagram-red.svg" alt="Instagram"></a>
          <a href="#"><img src="../assets/facebook-red.svg" alt="Facebook"></a>
          <a href="#"><img src="../assets/twitter-red.svg" alt="Twitter"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainPage",
};
</script>
<style>
.container {
  width: 1140px;

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

.main {
  display: flex;
  align-items: center;
  gap: 20px;
}

.main__block__text {
  width: 500px;
  margin: 0 0 35px;
}

.main__block__text h1 {
  font-size: 50px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 70px;
}

.main__block__text h2 {
  font-size: 38px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
}

h2 span {
  color: #bf3c30;
}

.main__block__button {
  position: relative;
  margin: 0 0 0 10px;
  width: 240px;
  height: 70px;
  background-color: #bf3c30;
  color: #F1E2D2;
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
  top: 25%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 23px;
}

.main__image {
  width: 750px;
  height: 750px;
}

.footer {
  display: flex;
  justify-content: center;
}

.footer__buttons {
  display: flex;
  gap: 33px;
  align-items: center;
}

</style>
