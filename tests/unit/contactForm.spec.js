import { mount } from "@vue/test-utils";
import ContactForm from "@/components/Search/ContactForm.vue";
global.fetch = jest.fn(() => Promise.reject({ status: 404 }));
describe("ContactForm.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ContactForm, {
      propsData: {
        carId: "hghvk",
      },
    });
  });

  it("should render ContactForm", () => {
    expect(wrapper.exists()).toBeTruthy;
  });

  it("should click toSubmit", () => {
    wrapper.setData({
      name: "Claus",
      cpf: "44843104060",
      phone: "(22)66589-6589",
      email: "email@email.com",
    });
    wrapper.trigger("submit.prevent");
    expect(wrapper.emitted()).toBeTruthy();
  });
});
