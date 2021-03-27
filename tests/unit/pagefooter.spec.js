import PageFooter from "@/components/PageFooter.vue";
import { mount } from "@vue/test-utils";

describe("PageFooter.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(PageFooter);
  });

  it("should render", () => {
    expect(wrapper.exists()).toBeTruthy;
  });
});
