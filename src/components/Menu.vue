<template>
  <div class="page-container">
    <div class="page-container__content">
      <Navbar />
      <div class="menu">
        <div class="menu__navigation">
          <a href="#">ramen 拉麺</a>
          <a href="#">soup スープ</a>
          <a href="#">rice ご飯</a>
          <a href="#">salad サラダ</a>
        </div>
        <div class="menu__list">
          <MenuListItem />
          <MenuListItem />
          <MenuListItem />
          <MenuListItem />
          <MenuListItem />
          <MenuListItem />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./UI/Navbar.vue";

import MenuListItem from "./UI/MenuListItem.vue";

export default {
  name: "Menu",
  components: { Navbar, MenuListItem },
};
</script>
<style scoped>
.page-container {
  background-image: url("../assets/background-main-1920.png");
}

.menu__navigation {
  display: flex;
  justify-content: space-between;
  margin: 25px 0 0 0;
  font-size: 37px;
  font-weight: 900;
}

.menu__navigation a {
  color: #262524;
  text-decoration: none;
  text-transform: uppercase;
}

.menu__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (max-width: 1540px) {
  .page-container {
    background-image: url("../assets/background-main-1536.png");
  }
}
</style>
