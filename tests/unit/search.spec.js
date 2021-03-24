import { mount } from "@vue/test-utils";
import Search from "@/components/Search";

describe("Search/index.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Search);
  });

  it("should render", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
