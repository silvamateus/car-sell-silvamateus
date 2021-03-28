<template>
  <div class="contact-form" v-if="showForm">
    <form @submit.prevent="contact">
      <h2>Entre em Contato</h2>
      <label for="name">Nome</label>
      <input type="text" id="name" v-model="name" required />
      <label for="cpf">CPF</label>
      <input type="text" id="cpf" v-model="cpf" maxlength="11" required />
      <label for="email">E-mail</label>
      <input type="email" id="email" v-model="email" required />
      <label for="phone">Celular</label>
      <input type="text" id="phone" v-model="phone" required />
      <div class="actions">
        <button @click="close" class="cancel">Cancelar</button>
        <button type="submit" class="submit">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { CPFValidation } from "@/utils/validation/cpf";
import { post } from "@/services/api";
export default {
  data() {
    return {
      name: "",
      cpf: "",
      email: "",
      phone: "",
      showForm: false,
    };
  },
  props: {
    showContactForm: { type: Boolean },
    carId: { type: String },
  },
  watch: {
    showContactForm(newValue) {
      this.showForm = newValue;
    },
  },
  methods: {
    clean() {
      this.name = "";
      this.cpf = "";
      this.email = "";
      this.phone = "";
    },
    contact() {
      if (!CPFValidation(this.cpf.replace(/\.|-/g, ""))) {
        return false;
      }
      const body = {
        announcement_id: this.carId,
        contact: {
          name: this.name,
          cpf: this.cpf,
          email: this.email,
          phone: this.phone,
        },
      };
      post(JSON.stringify(body));
      this.$emit("closeForm", false);
      this.clean();
    },
    close() {
      this.$emit("closeForm", false);
      this.clean();
    },
  },
  beforeUpdate() {
    this.cpf = this.cpf.padStart(11, "");
    this.cpf = this.cpf.replace(/\D/g, ""); // limit cpf input for numbers only
    this.cpf = this.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    // this.cpf += this.cpf.replace(/^(\d{3)/, "$1."); // get first trio of numbers and add dot
    // this.cpf += this.cpf.replace(/(\d{3)/, "$1."); // get second trio of numbers and add dot
    // this.cpf += this.cpf.replace(/(\d{3)/, "$1-"); // get third trio of numbers and add dash
    // this.cpf += this.cpf.replace(/(\d{2)/, "$1"); // get pair of nukbers
    this.phone = this.phone.padStart(11, "");
    this.phone = this.phone.replace(/\D/g, ""); // limit phone input for numbers only
    this.phone = this.phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
    // this.phone = this.phone.replace(/^(\d{2})/, "($1)"); // format DDD
    // this.phone = this.phone.replace(/(\d{5})/, "$1-"); // get first part of phone
    // this.phone = this.phone.replace(/(\d{4})/, "$1"); // get last part of phone
  },
};
</script>

<style scoped>
.contact-form {
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.439);
  justify-content: center;
  align-items: center;
  z-index: 11;
}
form {
  display: flex;
  flex-direction: column;
  background-color: var(--green);
  padding: 1rem;
  border-radius: var(--default-radius);
}
.contact-input lable {
  font-size: calc(0.6rem + var(--increase-font));
}
.contact-form input {
  border: 2px solid #fff;
  border-radius: var(--default-radius);
  margin-bottom: 1rem;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.329);
}
.contact-form h2 {
  padding: 1rem;
}
/* Actions */
.cancel,
.submit {
  padding: 1rem;
  border-radius: var(--default-radius);
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;
}
.cancel {
  margin-right: 0.5rem;
  background-color: rgb(243, 20, 20);
  color: #fff;
}
.cancel:hover {
  background-color: rgb(145, 14, 14);
}
.submit {
  box-shadow: 0 0 10px 0 rgba(9, 9, 9, 0.508);
}
.submit:hover {
  background-color: #687638;
  color: #fff;
}
@media (min-width: 720px) {
  form {
    padding: 2rem;
  }
}
</style>
