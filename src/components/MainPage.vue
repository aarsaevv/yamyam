<template>
  <div class="page-container">
    <div class="page-container__content">
      <Navbar />
      <div class="main-page">
        <div class="main-page__content main">
          <div class="main__block block">
            <div class="block__text">
              <h1>Hello! こんにちは！</h1>
              <h2><span>Y</span>ummy</h2>
              <h2><span>A</span>romatic</h2>
              <h2><span>M</span>outh-watering</h2>
            </div>
            <BigRedButton>RAMEN</BigRedButton>
          </div>
          <img class="main__image" src="../assets/ramen-cat.png" alt="Ramen" />
        </div>
        <div class="main-page__footer social">
          <div class="social__links">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BigRedButton from "./UI/BigRedButton.vue";
import Navbar from "./UI/Navbar.vue";
import SocialLinks from "./UI/SocialLinks.vue";
export default {
  name: "MainPage",
  components: { BigRedButton, Navbar, SocialLinks },
};
</script>
<style scoped>
.page-container {
  background-image: url("../assets/background-main-1920.png");
}

.page-container__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-page {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 50px 0 0;
}

.main-page__content {
  display: flex;
  align-items: center;
}

.block__text {
  width: 500px;
  margin: 0 0 35px;
}

.block__text h1 {
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 70px;
}

.block__text h2 {
  font-size: 38px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
}

h2 span {
  color: #bf3c30;
}

@media screen and (max-width: 1540px) {
  .page-container {
    background-image: url("../assets/background-main-1536.png");
  }

  .main-page {
    margin: 0;
  }

  .block__text h1 {
    font-size: 42px;
  }

  .block__text h2 {
    font-size: 32px;
  }


  .main__image {
    display: block;
    width: 60%;
  }
}

.main__image {
  display: block;
}

.main-page__footer {
  display: flex;
  justify-content: center;
}

.social__links {
  filter: invert(33%) sepia(32%) saturate(2893%) hue-rotate(335deg) brightness(84%) contrast(93%);
}
</style>
