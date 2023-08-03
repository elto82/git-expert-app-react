import { getGits } from "../../src/helpers/getGifs";

describe("Test in getGifs", () => {
  test("should return an array of gifs", async () => {
    const gifs = await getGits("One Punch");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });

  test("should return an empty array if the keyword is empty", async () => {
    const gifs = await getGits("");
    expect(gifs.length).toBe(0);
  });
});
