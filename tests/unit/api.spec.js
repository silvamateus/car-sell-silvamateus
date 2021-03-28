import { get, post } from "@/services/api";

describe("Mock api methods", () => {
  global.fetch = jest.fn(() =>
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
    })
  );

  it("gets list of cars announcements", async () => {
    const getCars = await get();
    expect(getCars).toStrictEqual({
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
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  beforeEach(() => fetch.mockClear());

  it("sends contact form post request", async () => {
    fetch.mockImplementationOnce(() => Promise.reject({ status: 404 }));
    const postContact = await post(
      JSON.stringify({
        announcement_id: "hghvk",
        contact: {
          name: "Claus",
          cpf: "44843104060",
          phone: "(22)66589-6589",
          email: "email@email.com",
        },
      })
    );
    expect(postContact.status).toEqual(404);
  });
});
