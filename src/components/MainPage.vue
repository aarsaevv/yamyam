<template>
  <div class="page-container">
    <div
      :class="
        isMobile ? 'page-container__content-mobile' : 'page-container__content'
      "
    >
      <NavbarMobile v-if="isMobile" />
      <Navbar v-else />
      <div :class="isMobile ? 'main-page-mobile' : 'main-page'">
        <div class="main-page__content main">
          <div class="main__block block">
            <div :class="isMobile ? 'block__text-mobile' : 'block__text'">
              <h1>Hello! こんにちは！</h1>
              <h2><span>Y</span>ummy</h2>
              <h2><span>A</span>romatic</h2>
              <h2><span>M</span>outh-watering</h2>
            </div>
            <router-link v-if="isMobile" to="/menu"
              ><BigRedButtonMobile class="block__button"
                >RAMEN</BigRedButtonMobile
              >
            </router-link>
            <router-link v-else to="/menu">
              <BigRedButton class="block__button">RAMEN</BigRedButton>
            </router-link>
          </div>
          <img
            v-if="!isMobile"
            class="main__image"
            src="../assets/ramen-cat.png"
            alt="Ramen"
          />
        </div>
        <div class="main-page__footer social">
          <div class="social__links">
            <SocialLinksMobile v-if="isMobile" />
            <SocialLinks v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BigRedButton from "./UI/BigRedButton.vue";
import BigRedButtonMobile from "./UI/BigRedButtonMobile.vue";
import Navbar from "./UI/Navbar.vue";
import NavbarMobile from "./UI/NavbarMobile.vue";
import SocialLinks from "./UI/SocialLinks.vue";
import SocialLinksMobile from "./UI/SocialLinksMobile.vue";
export default {
  name: "MainPage",
  components: {
    BigRedButton,
    BigRedButtonMobile,
    Navbar,
    SocialLinks,
    NavbarMobile,
    SocialLinksMobile,
  },
  computed: {
    isMobile() {
      return window.screen.width <= 400;
    },
  },
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

.main-page-mobile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 415px;
}

.main-page__content {
  display: flex;
  align-items: center;
}

.block__text {
  width: 500px;
  margin: 0 0 35px;
}

.block__text-mobile {
  width: 330px;
  margin: 0 0 15px;
}

.block__text h1 {
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 70px;
}

.block__text-mobile h1 {
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 30px;
}

.block__text h2 {
  font-size: 38px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
}

.block__text-mobile h2 {
  font-size: 22px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
}

h2 span {
  color: #bf3c30;
}

.block__button {
  margin: 0 0 0 10px;
}

.main__image {
  display: block;
}

.main-page__footer {
  display: flex;
  justify-content: center;
}

.social__links {
  filter: invert(33%) sepia(32%) saturate(2893%) hue-rotate(335deg)
    brightness(84%) contrast(93%);
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

@media screen and (max-width: 400px) {
  .page-container {
    background: none;
    background-color: #f1e2d2;
  }
}
</style>
