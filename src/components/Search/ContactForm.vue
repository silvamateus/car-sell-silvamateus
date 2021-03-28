<template>
  <form @submit.prevent="contact" v-if="showForm">
    <div class="contact-form">
      <h2>Entre em Contato</h2>
      <label for="name">Nome</label>
      <input type="text" id="name" v-model="name" required />
      <label for="cpf">CPF</label>
      <input type="text" id="cpf" v-model="cpf" maxlength="11" required />
      <transition name="invalid">
        <p v-if="!validCPF" class="invalid">cpf invalido</p>
      </transition>
      <label for="email">E-mail</label>
      <input type="email" id="email" v-model="email" required />
      <label for="phone">Celular</label>
      <input type="text" id="phone" v-model="phone" maxlength="11" required />
      <div class="actions">
        <button @click="close" class="cancel">Cancelar</button>
        <button type="submit" class="submit">Enviar</button>
      </div>
    </div>
  </form>
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
      validCPF: true,
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
    validateCPF() {
      return CPFValidation(this.cpf.replace(/\.|-/g, "")) && this.cpf !== "";
    },
    contact() {
      if (!this.validateCPF()) {
        this.validCPF = false;
        setTimeout(() => (this.validCPF = true), 1000);
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
      this.close();
    },
    close() {
      this.$emit("closeForm", false);
      this.clean();
    },
  },
  beforeUpdate() {
    this.cpf = this.cpf.replace(/\D/g, ""); // limit cpf input for numbers only
    this.cpf = this.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); // create the cpf mask when type all digits
    this.phone = this.phone.replace(/\D/g, ""); // limit phone input for numbers only
    this.phone = this.phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3"); // create phone mask when type all digits
  },
};
</script>

<style scoped>
form {
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
.contact-form {
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  padding: 1rem;
  border-radius: var(--default-radius);
  position: relative;
}
.contact-input lable {
  font-size: calc(0.6rem + var(--increase-font));
}
.contact-form input {
  border: 2px solid var(--white);
  border-radius: var(--default-radius);
  margin-bottom: 1.5rem;
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
  transition: background-color 500ms ease-in-out;
}
.cancel {
  margin-right: 0.5rem;
  background-color: #f31414;
  color: var(--white);
}
.cancel:hover {
  background-color: #770d0d;
}
.submit {
  background-color: var(--button-color);
  color: var(--white);
}
.submit:hover {
  background-color: var(--button-hover-color);
}
/* Invalid cpf */
.invalid {
  position: absolute;
  top: 11.8rem;
  right: 1rem;
  background-color: var(--gray);
  border-radius: var(--default-radius);
  padding: 0.4rem;
  color: var(--white);
}
.invalid::after {
  content: "";
  position: absolute;
  width: 0px;
  height: 0px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid var(--gray);
  right: -3px;
  top: -3px;
  border-radius: var(--default-radius);
  transform: rotateZ(-90deg);
}
.invalid-enter-active {
  animation: enter-invalid 500ms ease-in;
}
.invalid-leave-active {
  animation: leave-invalid 500ms ease-out;
}

/* Animations */
@keyframes enter-invalid {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes leave-invalid {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* Media Query */
@media (min-width: 720px) {
  form {
    padding: 2rem;
  }
}
</style>
