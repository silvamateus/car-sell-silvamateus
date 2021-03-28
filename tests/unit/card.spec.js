import { mount } from "@vue/test-utils";
import Card from "@/components/Search/Card.vue";

describe("Card.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Card, {
      propsData: {
        car: { id: "", name: "", brand: "", image: "", price: 0, km: 0 },
      },
    });
  });

  it("should render", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render contact form", async () => {
    const button = wrapper.find(".call-contact");
    await button.trigger("click");
    expect(wrapper.find(".contact-form").exists()).toBeTruthy();
  });
});
