<template>
  <div class="card">
    <img :src="`/img/${car.image}`" alt="Car showcase" />
    <div class="card-text">
      <div>
        <p class="car-price">R${{ car.price.toFixed(2).replace(".", ",") }}</p>
        <h2>{{ car.brand }}</h2>
        <p class="car-name">{{ car.name }}</p>
      </div>
      <div>
        <p class="car-km">{{ car.km }}<span>km</span></p>
        <button @click="toShowContactForm">Entrar em contato</button>
      </div>
    </div>
    <contact-form
      :showContactForm="showContactForm"
      :carId="car.id"
      @closeForm="closeForm($event)"
    />
  </div>
</template>

<script>
import ContactForm from "./ContactForm.vue";
export default {
  name: "Card",
  data() {
    return {
      showContactForm: false,
    };
  },
  props: {
    car: { type: Object },
  },
  components: {
    ContactForm,
  },
  methods: {
    toShowContactForm() {
      this.showContactForm = !this.showContactForm;
    },
    closeForm(event) {
      this.showContactForm = event;
      console.log(event);
    },
  },
};
</script>

<style scoped>
img {
  width: 250px;
  height: 200px;
  margin: auto;
}
h2 {
  font-size: 0.9rem;
  color: #a0a0a0;
}
button {
  font-size: 0.8rem;
  padding: 1rem;
  box-shadow: 0 0 3px 0 rgba(9, 9, 9, 0.385);
  border-radius: 0.3rem;
  transition: background-color 500ms ease-in-out;
}
button:hover {
  background-color: #93a064;
}
/* Card */
.card {
  padding: 1rem;
  background-color: #ddebac;
  border-radius: 0.3rem;
  margin: 1rem 1rem 1rem 0;
  display: flex;
  flex-direction: column;
  width: 17.9rem;
  position: relative;
}
.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* Car text style */
.car-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.car-km {
  font-size: 0.8rem;
  padding: 1rem 0;
}
.car-km span {
  font-weight: 700;
}
.car-price {
  font-size: 1.2rem;
}
</style>
