<template>
  <div class="search-bar">
    <div>
      <label for="minPrice">Preço Mín.</label>
      <input type="number" id="minPrice" />
    </div>
    <div>
      <label for="maxPrice">Preço Máx.</label>
      <input type="number" id="maxPrice" />
    </div>
    <div>
      <label for="minKm">Mín. Kms</label>
      <input type="number" id="minKm" />
    </div>
    <div>
      <label for="maxKm">Máx. Kms</label>
      <input type="number" id="maxKm" />
    </div>
  </div>
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
