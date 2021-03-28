<template>
  <div id="app" @click="show = false">
    <nav-bar :show="show" @showMenu="show = $event" />
    <carousel />
    <search />
    <page-footer />
  </div>
</template>

<script>
import Carousel from "./components/Carousel.vue";
import NavBar from "./components/NavBar.vue";
import Search from "./components/Search";
import PageFooter from "./components/PageFooter.vue";

export default {
  name: "App",
  components: { NavBar, Carousel, Search, PageFooter },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
:root {
  --white: #e4f0ff;
  --gray: #717788;
  --default-radius: 0.3rem;
  --button-color: #2a75bb;
  --button-hover-color: #064e92;
  --increase-font: 0rem;
}
html {
  scroll-behavior: smooth;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  background-color: var(--gray);
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1440px;
  margin: auto;
}
@media (min-width: 720px) {
  :root {
    --increase-font: 0.2rem;
  }
}
</style>
