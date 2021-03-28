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
  font-size: calc(0.9rem + var(--increase-font));
  color: #212121;
}
button {
  font-size: calc(0.8rem + var(--increase-font));
  padding: 1rem;
  border-radius: var(--default-radius);
  transition: background-color 500ms ease-in-out;
  background-color: var(--button-color);
  color: var(--white);
}
button:hover {
  background-color: var(--button-hover-color);
}
/* Card */
.card {
  padding: 1rem;
  background-color: var(--white);
  border-radius: var(--default-radius);
  margin: 1rem auto;
  width: 17.9rem;
  position: relative;
}
/* Car text style */
.car-name {
  font-size: calc(1.5rem + var(--increase-font));
  font-weight: 700;
}

.car-km {
  font-size: calc(0.8rem + var(--increase-font));
  padding: 1rem 0;
}
.car-km span {
  font-weight: 700;
}
.car-price {
  font-size: calc(1.2rem + var(--increase-font));
  font-weight: 700;
}

@media (min-width: 720px) {
  .card {
    margin: 1rem 0 1rem 1rem;
  }
}
</style>
