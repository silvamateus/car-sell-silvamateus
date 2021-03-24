<template>
  <div id="search">
    <card />
  </div>
</template>

<script>
import Card from "./Card.vue";
import { get } from "@/services/api";
export default {
  data() {
    return {
      cars: [],
    };
  },
  created() {
    get()
      .then((response) => response.json())
      .then((response) => (this.cars = response.cars))
      .catch((err) => console.error(err));
  },
};
</script>

<style></style>
