import { shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("NavBar.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(NavBar);
  });

  it("should render", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
