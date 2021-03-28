import { mount } from "@vue/test-utils";
import ContactForm from "@/components/Search/ContactForm.vue";
global.fetch = jest.fn(() => Promise.reject({ status: 404 }));
describe("ContactForm.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ContactForm, {
      propsData: {
        showContactForm: true,
      },
    });
  });

  it("should render ContactForm", () => {
    expect(wrapper.exists()).toBeTruthy;
  });
});
