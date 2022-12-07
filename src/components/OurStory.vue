<template>
  <div class="story">
    <div class="container">
      <Navbar />
      <div class="our-story">
        <div class="our-story__about-us">
          <h2>About Us 私たちに関しては</h2>
          <h6>
            Ramen is Chinese in origin.<br />
            The name was originally used for two other dishes, namely Chūka soba
            and Shina soba. Both translate to “Chinese noodle”, but with
            different connotations. Japan only co-opted the term in the late
            19th century, when the country was going through an industrial
            revolution. Since workers (also known as “salarymen” back then)
            barely had the time to prepare their own meals before leaving for
            work, they instead ate in ramen restaurants.
          </h6>
        </div>
        <div class="our-story__our-team">
          <h2>Our team 私たちのチーム</h2>
          <h6>
            Ramen is Chinese in origin.<br />
            The name was originally used for two other dishes, namely Chūka soba
            and Shina soba. Both translate to “Chinese noodle”, but with
            different connotations. Japan only co-opted the term in the late
            19th century, when the country was going through an industrial
            revolution. Since workers (also known as “salarymen” back then)
            barely had the time to prepare their own meals before leaving for
            work, they instead ate in ramen restaurants.
          </h6>
        </div>
        <div class="our-story__our-values">
          <h2>Our values 私達の価値</h2>
          <h6>
            Ramen is Chinese in origin.<br />
            The name was originally used for two other dishes, namely Chūka soba
            and Shina soba. Both translate to “Chinese noodle”, but with
            different connotations. Japan only co-opted the term in the late
            19th century, when the country was going through an industrial
            revolution. Since workers (also known as “salarymen” back then)
            barely had the time to prepare their own meals before leaving for
            work, they instead ate in ramen restaurants.
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './UI/Navbar.vue';

export default {
    name: "OurStory",
    components: { Navbar }
};
</script>
<style scoped>
.story {
  background-image: url("../assets/background-story.png");
}

.container {
  width: 1140px;
  height: 100vh;
}

.our-story {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 44px 0 0;
}

.our-story h2 {
  font-size: 38px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
}

.our-story h6 {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
}

.our-story__about-us {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 760px;
  height: 222px;
  text-align: justify;
}

.our-story__our-team {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-left: auto;
  gap: 15px;
  width: 760px;
  height: 222px;
  text-align: right;
}

.our-story__our-values {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 760px;
  height: 222px;
  text-align: justify;
}
</style>
