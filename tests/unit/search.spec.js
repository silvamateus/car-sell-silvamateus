import { mount } from "@vue/test-utils";
import Search from "@/components/Search";
import SearchBar from "@/components/Search/SearchBar.vue";

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

describe("Search/index.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Search);
  });

  it("should render", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render SearchBar", () => {
    const searchBar = wrapper.findComponent(SearchBar);
    expect(searchBar.exists()).toBeTruthy();
  });

  it("should emit toSubmit", () => {
    const searchBar = wrapper.findComponent(SearchBar);
    searchBar.vm.$emit("toSubmit", {
      maxPrice: 0,
      minPrice: 0,
      maxKm: 0,
      minKm: 0,
    });
    expect(searchBar.emitted().toSubmit).toBeTruthy;
  });
});
