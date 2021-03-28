<template>
  <form class="search-bar" @submit.prevent="toFilter">
    <div>
      <label for="minPrice">Preço Mín.</label>
      <input type="number" id="minPrice" v-model="minPrice" />
    </div>
    <div>
      <label for="maxPrice">Preço Máx.</label>
      <input type="number" id="maxPrice" v-model="maxPrice" />
    </div>
    <div>
      <label for="minKm">Mín. Kms</label>
      <input type="number" id="minKm" v-model="minKm" />
    </div>
    <div>
      <label for="maxKm">Máx. Kms</label>
      <input type="number" id="maxKm" v-model="maxKm" />
    </div>
    <button type="submit">Filtrar</button>
  </form>
</template>

<script>
export default {
  props: {
    maxPrice: {
      type: [Number, String],
    },
    minPrice: {
      type: [Number, String],
    },
    minKm: {
      type: [Number, String],
    },
    maxKm: {
      type: [Number, String],
    },
  },
  methods: {
    // emit filters to parent
    toFilter() {
      this.$emit("toSubmit", {
        maxPrice: parseFloat(this.maxPrice),
        minPrice: parseFloat(this.minPrice),
        maxKm: parseFloat(this.maxKm),
        minKm: parseFloat(this.minKm),
      });
    },
  },
};
</script>

<style scoped>
/* Search Bar */
.search-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
}
.search-bar > div {
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  padding-bottom: 1rem;
  width: 12rem;
}
button {
  width: 4rem;
  background-color: var(--green);
  padding: 0.5rem;
  font-size: calc(0.8rem + var(--increase-font));
  border-radius: var(--default-radius);
  transition: background-color 500ms ease-in-out;
}
button:hover {
  background-color: var(--dark-green);
}
.search-bar label {
  font-size: calc(0.8rem + var(--increase-font));
}
.search-bar input {
  border: 2px solid var(--green);
  border-radius: 0.5rem;
  width: 5rem;
}
</style>
