import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import NavBar from "@/components/NavBar";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        cars: [
          {
            id: "hghvk",
            image: "hghvk.jpg",
            name: "Golf",
            brand: "Wolksvagem",
            km: 0,
            price: 5999990,
          },
        ],
        count: 5,
        properties: {
          max_price: 36723000,
          min_price: 60000,
          max_km: 12000,
        },
      }),
  })
);

describe("App.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(App);
  });

  it("should render", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should open menu", async () => {
    const navbar = wrapper.findComponent(NavBar);
    await navbar.vm.$emit("showMenu", true);
    expect(wrapper.find(".link-list").exists()).toBeTruthy();
  });
});
