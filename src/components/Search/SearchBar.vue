<template>
  <form class="search-bar" @submit="toFilter">
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
      type: Number,
    },
    minPrice: {
      type: Number,
    },
    minKm: {
      type: Number,
    },
    maxKm: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.search-bar > div {
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  padding-bottom: 1rem;
  width: 12rem;
}
.search-bar label {
  font-size: 0.8rem;
}
.search-bar input {
  border: 2px solid #ddebac;
  border-radius: 0.5rem;
  width: 5rem;
}
</style>
