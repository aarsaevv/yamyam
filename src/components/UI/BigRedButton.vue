<template>
  <button class="block__button button">
    <span class="button__text">
      <slot></slot>
    </span>
    <span class="button__outline"></span>
  </button>
</template>

<style>
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
  background: #bf3c30;
  border: 2px solid #262524;
  border-radius: 7px;
  transition: transform 0.1s;
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
  transition: transform 0.1s, box-shadow 0.1s;
}

.block__button:active {
  transform: translate(-0.5em, 0.5em);
}
.block__button:active::before {
  transform: translate3d(0.5em, 0, -1em);
}

@media screen and (max-width: 400px) {
  button {
    font-size: 18px;
  }

  .block__button {
    width: 180px;
    height: 60px;
  }
}
</style>
