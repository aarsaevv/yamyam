<template>
  <div class="container__loader">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.container__loader {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  border: 10px solid #f1e2d2;
  border-top: 10px solid #bf3c30;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(80deg);
  }
  60% {
    transform: rotate(260deg);
  }

  80% {
    transform: rotate(320deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 400px) {
  .container__loader {
    width: 330px;
  }
}
</style>
