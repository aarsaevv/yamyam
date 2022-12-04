<template>
  <div class="about">
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
      <div class="contacts">
        <h2>contacts 連絡先</h2>
        <div class="contacts__block">
          <div class="contacts__block__information">
            <div class="contacts__block__information__address">
              <h4>Our address</h4>
              <h5>45454 Kelsie Village Apt. 099</h5>
            </div>
            <div class="contacts__block__information__hours">
              <h4>Working hours</h4>
              <h5>9 am - 11 pm</h5>
            </div>
            <div class="contacts__block__information__phone">
              <h4>Our phone</h4>
              <h5>952.599.8789 x9305</h5>
            </div>
            <div class="contacts__block__information__social">
              <h4>Social networks</h4>
              <div class="social">
                <a href="#"
                  ><img src="../assets/Instagram.svg" alt="Instagram"
                /></a>
                <a href="#"
                  ><img src="../assets/Facebook.svg" alt="Facebook"
                /></a>
                <a href="#"
                  ><img src="../assets/Twitter.svg" alt="Twitter"
                /></a>
              </div>
            </div>
          </div>
          <div class="contacts__block__map">
            <img src="../assets/map.png" alt="Map" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contacts",
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

.contacts h2 {
  display: flex;
  justify-content: center;
  margin: 30px 0;
  height: 60px;
  color: #262524;
  font-size: 37px;
  font-weight: 900;
  text-transform: uppercase;
}

.contacts__block {
  display: flex;
  justify-content: center;
  gap: 218px;
}

.contacts__block__information h4 {
  color: #262524;
  font-size: 23px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
}

.contacts__block__information h5 {
  color: #262524;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
}

.contacts__block__information__address {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 0 40px;
}

.contacts__block__information__hours {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 0 40px;
}

.contacts__block__information__phone {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 0 40px;
}

.contacts__block__information__social {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social {
  display: flex;
  gap: 33px;
}

</style>
