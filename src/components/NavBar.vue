<template>
  <header>
    <nav class="nav-bar">
      <div>
        <img :src="logo" alt="spotz logo" class="logo" />
      </div>
      <div class="menu">
          <div class="link-list" v-if="show">
            <a href="#home" class="home">Início</a>
            <a href="#search" class="search">Buscar</a>
            <a href="#about" class="about">Sobre</a>
      </div>
      </div>
    </nav>
  </header>
</template>

<script>
import logo from "../assets/spotz-logo.png";
export default {
  data() {
    return {
      logo: logo,
    };
  },
  props: ["show"],
  methods: {
    showMenu() {
      this.$emit("showMenu", !this.show);
    },
  },
};
</script>

<style></style>
