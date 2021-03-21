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

<style>
button {
  color: white !important;
}
/* Nav Bar*/
.nav-bar {
  display: flex;
  position: fixed;
  width: 100vw;
  align-items: center;
  padding: 1rem;
}
/* Menu*/
.menu {
  display: flex;
  justify-content: flex-end;
  flex-basis: 90%;
  position: relative;
}
.link-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(221, 235, 172);
  padding: 1rem;
  position: fixed;
  right: 4rem;
  top: 3rem;
  border-radius: 0.5rem;
  color: #000;
}
.link-list a {
  padding: 0 1rem;
  text-decoration: none;
  color: inherit;
}
.logo {
  width: 8rem;
}

</style>
