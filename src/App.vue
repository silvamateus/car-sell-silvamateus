<template>
  <div id="app" @click="show = false">
    <nav-bar :show="show" @showMenu="show = $event" />
    <carousel />
    <search />
  </div>
</template>

<script>
import Carousel from "./components/Carousel.vue";
import NavBar from "./components/NavBar.vue";
import Search from "./components/Search";

export default {
  name: "App",
  components: { NavBar, Carousel, Search },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  background-color: rgb(162, 162, 162);
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
