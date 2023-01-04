<template>
  <div class="social-links link">
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
  name: "SocialLinksMobile",
};
</script>

<style scoped>
.social-links {
  display: flex;
  gap: 33px;
  align-items: center;
}

.link__image {
  height: 35px;
  width: 35px;
}
</style>
