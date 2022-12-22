<template>
  <button class="block__button button">
    <div class="button__text"><slot></slot></div>
    <div class="button__outline"></div>
  </button>
</template>

<script>
export default {
  name: "BigRedButton",
};
</script>

<style>
/* .block__button {
  position: relative;
  margin: 0 0 0 10px;
  width: 240px;
  height: 70px;
  background-color: #bf3c30;
  color: #f1e2d2;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  border-radius: 7px;
} */

/* .button__outline {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #262524;
    border-radius: 7px;
    top: 7px;
    left: -10px;
    z-index: -1;
} */

/* .button__text {
  text-align: center;
  font-size: 22px;
} */

button {
  position: relative;
  display: inline-block;
  margin: 0 auto;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 23px;
  font-family: inherit;
}

.block__button {
  width: 220px;
  height: 70px;
  font-weight: 600;
  color: #f1e2d2;
  text-transform: uppercase;
  /* padding: 1.25em 2em; */
  background: #bf3c30;
  border: 2px solid #262524;
  border-radius: 7px;
  transition: transform 0.15s;
  transform-style: preserve-3d;
}

.block__button::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: -0.5em;
  right: 0;
  bottom: 0;
  background: #f1e2d2;
  border-radius: inherit;
  box-shadow: 0 0 0 2px #262524;
  transform: translate3d(0, 0.5em, -1em);
  transition: transform 0.15s, box-shadow 0.15s;
}

.block__button:active {
  transform: translate(-0.5em, 0.5em);
}
.block__button:active::before {
  transform: translate3d(0.5em, 0, -1em);
}
</style>
