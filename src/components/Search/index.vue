<template>
  <div id="search">
    <search-bar
      :maxKm="maxKm"
      :minKm="minKm"
      :maxPrice="maxPrice"
      :minPrice="minPrice"
      @toSubmit="submitter($event)"
    />
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
    //will submit the filter and update props
    submitter(properties) {
      this.maxKm = properties.maxKm;
      this.minKm = properties.minKm;
      this.maxPrice = properties.maxPrice;
      this.minPrice = properties.minPrice;
      if (isNaN(properties.maxKm)) {
        properties.maxKm = this.properties["max_km"];
      }
      if (isNaN(properties.minKm)) {
        properties.minKm = 0;
      }
      if (isNaN(properties.maxPrice)) {
        properties.maxPrice = properties["max_price"];
      }
      if (isNaN(properties.minPrice)) {
        properties.minPrice = properties["min_price"];
      }
      get(properties)
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
}
</style>
