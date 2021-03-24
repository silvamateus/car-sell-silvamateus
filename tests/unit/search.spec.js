import { mount } from "@vue/test-utils";
import Search from "@/components/Search";
import Card from "@/components/Search/Card.vue";

describe("Search/index.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Search);
  });

  it("should render", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it("should render Card", () => {
    const card = wrapper.findComponent(Card);
    expect(card.exists()).toBeTruthy();
  });
});
