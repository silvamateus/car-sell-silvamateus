<template>
  <header>
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
  props: ["show"],
  methods: {
    showMenu() {
      this.$emit("showMenu", !this.show);
    },
  },
};
</script>

<style></style>
