<template>
  <div
    class="about"
    :style="{'background-image': 'url(' + require('../assets/background.png') + ')'}">
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
      <div class="menu">
        <div class="menu__navigation">
          <a href="#">ramen 拉麺</a>
          <a href="#">soup スープ</a>
          <a href="#">rice ご飯</a>
          <a href="#">salad サラダ</a>
        </div>
        <div class="menu__list">
          <div class="menu__list__item">
            <div class="menu__list__item__card">
              <h3>Miso ramen</h3>
              <img src="../assets/ramen-menu.svg" alt="Ramen" />
              <p>
                Coming from the Sapporo region of Hokkaido, miso ramen takes its
                name from its main ingredient. This broth is strong and savory
                and has an opaque appearance.
              </p>
              <div class="card-price">
                <h5>12$ / 500gr</h5>
                <button class="card-button">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div class="menu__list__item">
            <div class="menu__list__item__card">
              <h3>Tonkotsu ramen</h3>
              <img src="../assets/soup-menu.svg" alt="Soup" />
              <p>
                Originating from modern-day Fukuoka and lending its mouthwatering fragrance to Tokyo’s Asakusa region, tonkotsu ramen is made from boiling pork.
              </p>
              <div class="card-price">
                <h5>15$ / 500gr</h5>
                <button class="card-button">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div class="menu__list__item">
            <div class="menu__list__item__card">
              <h3>Shoyu Ramen</h3>
              <img src="../assets/rice-menu.svg" alt="Rice" />
              <p>
                Shoyu means soy sauce in Japanese and this style of noodle dish was actually the first type of ramen and is still going strong.
              </p>
              <div class="card-price">
                <h5>10$ / 500gr</h5>
                <button class="card-button">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="menu__list">
          <div class="menu__list__item">
            <div class="menu__list__item__card">
              <h3>shio ramen</h3>
              <img src="../assets/salad-menu.svg" alt="Salad" />
              <p>
                Shio means salt and this style of ramen tends to be light and transparent. It’s often made by boiling down chicken bones and flavored with seafood.
              </p>
              <div class="card-price">
                <h5>10$ / 500gr</h5>
                <button class="card-button">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div class="menu__list__item">
            <div class="menu__list__item__card">
              <h3>Tsukemen ramen</h3>
              <img src="../assets/ramen-menu.svg" alt="Ramen" />
              <p>
                These thick and hearty ramen noodles are cooked, plunged into cool water, and then served alongside a bowl of tare ramen broth.
              </p>
              <div class="card-price">
                <h5>18$ / 500gr</h5>
                <button class="card-button">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div class="menu__list__item">
            <div class="menu__list__item__card">
              <h3>Wakayama ramen</h3>
              <img src="../assets/ramen-menu.svg" alt="Ramen" />
              <p>
                From Shikoku Island, Wakayama Ramen uses a blend of tonkotsu and shoyu style broths to create something spectacular.
              </p>
              <div class="card-price">
                <h5>14$ / 500gr</h5>
                <button class="card-button">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
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

.menu__navigation {
  display: flex;
  justify-content: space-between;
  margin: 30px 0 0 0;
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
  gap: 79px;
  margin: 30px 0 0 0;
}

.menu__list__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 262px;
  height: 341px;
  border: 3px solid #262524;
  border-radius: 7px;
}

.menu__list__item__card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 238px;
  height: 310px;
  border: 3px solid #bf3c30;
  border-radius: 7px;
}

.menu__list__item__card h3 {
  margin: 0 auto;
  font-size: 23px;
  text-transform: uppercase;
}

.menu__list__item__card p {
  height: 90px;
  letter-spacing: -1px;
  line-height: 18px;
  font-size: 15px;
  text-align: justify;
  text-indent: 15px;
  margin: 0 7px;
}

.card-button {
  width: 105px;
  height: 33px;
  color: #e3dcc3;
  background-color: #bf3c30;
  border: none;
  border-radius: 7px;
  font-size: 14px;
}

.card-price {
  display: flex;
  align-items: center;
  gap: 15px;
}

.card-price h5 {
  font-size: 15px;
  margin: 0 auto;
}
</style>
