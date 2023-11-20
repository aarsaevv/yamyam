<template>
  <div class="social-links">
    <a class="link" href="#"
      ><img
        class="link__image"
        src="@/assets/img/icons/instagram.svg"
        alt="Instagram"
    /></a>
    <a class="link" href="#"
      ><img class="link__image" src="@/assets/img/icons/facebook.svg" alt="Facebook"
    /></a>
    <a class="link" href="#"
      ><img class="link__image" src="@/assets/img/icons/twitter.svg" alt="Twitter"
    /></a>
  </div>
</template>

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
