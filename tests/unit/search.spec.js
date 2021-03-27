import { mount } from "@vue/test-utils";
import Search from "@/components/Search";
import Card from "@/components/Search/Card.vue";
import SearchBar from "@/components/Search/SearchBar.vue";
import ContactForm from "@/components/Search/ContactForm.vue";

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
    const card = mount(Card, {
      propsData: {
        car: { name: "", brand: "", image: "", id: "", price: 0 },
      },
    });
    expect(card.exists()).toBeTruthy();
  });
  it("should render ContactForm", () => {
    const contactForm = mount(Card, {
      propsData: {
        car: { name: "", brand: "", image: "", id: "", price: 0 },
      },
    }).findComponent(ContactForm);

    expect(contactForm.exists()).toBeTruthy();
  });
});
