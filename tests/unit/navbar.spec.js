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
  it("should have 'Início' link", () => {
    const home = wrapper.find(".home");

    expect(home.exists()).toBeTruthy();
  });
  it("should have 'Buscar' link", () => {
    const search = wrapper.find(".search");

    expect(search.exists()).toBeTruthy();
  });
});
