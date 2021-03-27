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

