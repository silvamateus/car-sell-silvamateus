<template>
  <div id="app" @click="show = false">
    <nav-bar :show="show" @showMenu="show = $event" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
