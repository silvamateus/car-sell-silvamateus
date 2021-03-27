import { mount } from "@vue/test-utils";
import Search from "@/components/Search";
import Card from "@/components/Search/Card.vue";
import SearchBar from "@/components/Search/SearchBar.vue";

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
  it("should render Card", () => {
    const card = wrapper.findComponent(Card);
    expect(card.exists()).toBeTruthy();
  });
});
