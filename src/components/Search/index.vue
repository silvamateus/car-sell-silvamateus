<template>
  <div id="search">
    <search-bar
      :maxKm="maxKm"
      :minKm="minKm"
      :maxPrice="maxPrice"
      :minPrice="minPrice"
      @toSubmit="submitter($event)"
    />
    <section class="search-container">
      <card v-for="car of cars" :car="car" :key="car.id" />
    </section>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { get } from "@/services/api";
import SearchBar from "./SearchBar.vue";
export default {
  data() {
    return {
      cars: [],
      properties: {},
      maxKm: "",
      minKm: "",
      maxPrice: "",
      minPrice: "",
    };
  },
  components: { Card, SearchBar },
  methods: {
    // submit the filter and update props
    submitter(properties) {
      let query;
      if (!isNaN(properties.maxKm)) {
        query += `maxKm=${properties.maxKm}&`;
      }
      if (!isNaN(properties.minKm)) {
        query += `minKm=${properties.minKm}&`;
      }
      if (!isNaN(properties.maxPrice)) {
        query += `maxPrice=${properties.maxPrice}&`;
      }
      if (!isNaN(properties.minPrice)) {
        query += `minPrice=${properties.minPrice}&`;
      }
      this.maxKm = properties.maxKm;
      this.minKm = properties.minKm;
      this.maxPrice = properties.maxPrice;
      this.minPrice = properties.minPrice;
      get(query)
        .then((response) => response.json())
        .then((response) => (this.cars = response.cars))
        .catch((err) => console.error(err));
    },
  },
  created() {
    get()
      .then((response) => response.json())
      .then((response) => {
        this.cars = response.cars;
        this.properties = response.properties;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style>
#search {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.search-container {
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 640px) {
  .search-container {
    width: 100%;
  }
}
@media (min-width: 720px) {
  .search-container {
    justify-content: center;
  }
}
</style>
