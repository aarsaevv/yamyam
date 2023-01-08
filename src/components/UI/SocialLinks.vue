<template>
  <div class="social-links">
    <a class="link" href="#"
      ><img
        class="link__image"
        src="../../assets/instagram.svg"
        alt="Instagram"
    /></a>
    <a class="link" href="#"
      ><img class="link__image" src="../../assets/facebook.svg" alt="Facebook"
    /></a>
    <a class="link" href="#"
      ><img class="link__image" src="../../assets/twitter.svg" alt="Twitter"
    /></a>
  </div>
</template>

<script>
export default {
  name: "FooterSocialLinks",
};
</script>

<style scoped>
.social-links {
  display: flex;
  gap: 33px;
  align-items: center;
}

@media screen and (max-width: 400px) {
  .link__image {
    height: 35px;
    width: 35px;
  }
}
</style>
