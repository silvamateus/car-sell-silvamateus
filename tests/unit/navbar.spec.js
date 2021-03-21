import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("NavBar.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(NavBar, {
      propsData: {
        show: true,
      },
  });
  });

  it("should render", async () => {
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
  it("should have 'Sobre' link", () => {
    const about = wrapper.find(".about");

    expect(about.exists()).toBeTruthy();
  });
});
