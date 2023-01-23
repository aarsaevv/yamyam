<template>
  <div class="page-container">
    <div class="page-container__content">
      <Navbar />
      <div class="contacts">
        <h2>contacts 連絡先</h2>
        <div class="contacts__block block">
          <div class="block__information information">
            <div class="information__address">
              <h4>Our address</h4>
              <h5>45454 Kelsie Village Apt. 099</h5>
            </div>
            <div class="information__hours">
              <h4>Working hours</h4>
              <h5>9 am - 11 pm</h5>
            </div>
            <div class="information__phone">
              <h4>Our phone</h4>
              <h5>952.599.8789 x9305</h5>
            </div>
            <div class="information__social social">
              <h4>Social networks</h4>
              <div class="social__links">
                <SocialLinks />
              </div>
            </div>
          </div>
          <div class="block__map">
            <iframe
              width="458"
              height="429"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.00931358337404%2C40.71037756449121%2C-73.98922920227052%2C40.72174601295284&amp;layer=mapnik&amp;marker=40.71606203138471%2C-73.99927139282227"
              style="border-radius: 7px"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="our-location">
        <h2>our location 位置</h2>
        <div class="block__map-mobile">
          <iframe
            width="330"
            height="330"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.00931358337404%2C40.71037756449121%2C-73.98922920227052%2C40.72174601295284&amp;layer=mapnik&amp;marker=40.71606203138471%2C-73.99927139282227"
            style="border-radius: 7px"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./UI/Navbar.vue";
import SocialLinks from "./UI/SocialLinks.vue";

export default {
  name: "Contacts",
  components: { Navbar, SocialLinks },
};
</script>
<style scoped>
.page-container {
  background-image: url("../assets/background-contacts-1920.png");
}

.contacts h2 {
  display: flex;
  justify-content: center;
  margin: 25px 0;
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

.block__information h4 {
  color: #262524;
  font-size: 23px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
}

.block__information h5 {
  color: #262524;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
}

.information__address {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 0 40px;
}

.information__hours {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 0 40px;
}

.information__phone {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 0 40px;
}

.information__social {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social__links {
  display: flex;
  gap: 33px;
  filter: invert(12%) sepia(10%) saturate(169%) hue-rotate(349deg)
    brightness(96%) contrast(92%);
}

.our-location {
  display: none;
}

@media screen and (max-width: 1540px) {
  .page-container {
    background-image: url("../assets/background-contacts-1536.png");
  }
}

@media screen and (max-width: 400px) {
  .page-container {
    background: none;
    background-color: #f1e2d2;
  }

  .contacts h2 {
    margin: 20px 0;
    height: 33px;
    font-size: 23px;
  }

  .contacts__block {
    flex-direction: column;
  }

  .block__information h4 {
    font-size: 20px;
  }

  .block__information h5 {
    font-size: 18px;
  }

  .information__address {
    gap: 5px;
    margin: 0 0 20px;
  }

  .information__hours {
    gap: 5px;
    margin: 0 0 20px;
  }

  .information__phone {
    gap: 5px;
    margin: 0 0 20px;
  }

  .information__social {
    gap: 5px;
  }

  .block__map {
    display: none;
  }

  .our-location {
    display: flex;
    flex-direction: column;
  }

  .our-location h2 {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    height: 33px;
    font-size: 23px;
    font-weight: 900;
    text-transform: uppercase;
  }
}
</style>
