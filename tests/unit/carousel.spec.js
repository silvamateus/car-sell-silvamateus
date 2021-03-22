import { mount } from "@vue/test-utils";
import Carousel from "@/components/Carousel.vue";

describe("Carousel.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Carousel);
  });

  it("should render", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it("should have carousel", () => {
    const carousel = wrapper.find(".carousel-wrapper");
    expect(carousel.exists()).toBeTruthy();
  });
});
