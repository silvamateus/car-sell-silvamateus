<template>
  <header>
    <nav class="nav-bar">
      <div>
        <img :src="logo" alt="spotz logo" class="logo" />
      </div>
      <div class="menu">
        <transition name="slide">
          <div class="link-list" v-if="show">
            <a href="#home" class="home">Início</a>
            <a href="#search" class="search">Buscar</a>
            <a href="#about" class="about">Sobre</a>
          </div>
        </transition>
        <button @click.stop="showMenu"><i class="fas fa-bars"></i></button>
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

<style scoped>
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
  z-index: 10;
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
  background-color: var(--green);
  padding: 1rem;
  position: fixed;
  right: 3rem;
  top: 3rem;
  border-radius: 0.5rem;
  color: #000;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.357);
}
.link-list a {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;
}
.logo {
  width: 8rem;
}
.fas.fa-bars {
  font-size: calc(2rem + var(--increase-font));
}

/* Menu Transition */
@keyframes slide-in {
  from {
    transform: translateY(-60px) rotateX(45deg);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0) rotateX(0);
    opacity: 1;
  }
  to {
    transform: translateY(-60px) rotateX(45deg);
    opacity: 0;
  }
}
.slide-enter-active {
  animation: slide-in 0.5s ease;
}
.slide-leave-active {
  animation: slide-out 0.5s ease;
}
</style>
