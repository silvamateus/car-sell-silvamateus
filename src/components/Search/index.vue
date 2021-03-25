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
  created() {
    get()
      .then((response) => response.json())
      .then((response) => (this.cars = response.cars))
      .catch((err) => console.error(err));
  },
};
</script>

<style>
#search {
  padding: 1rem;
}
</style>
