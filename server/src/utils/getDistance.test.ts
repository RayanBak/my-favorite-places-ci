import { getDistance } from "./getDistance";

describe("getDistance", () => {
  it("returns 0 when the two positions are identical", () => {
    const distance = getDistance(
      { lat: 45.764043, lng: 4.835659 },
      { lat: 45.764043, lng: 4.835659 }
    );

    expect(distance).toBe(0);
  });

  it("returns a positive distance when the two positions are different", () => {
    const distance = getDistance(
      { lat: 45.764043, lng: 4.835659 },
      { lat: 48.856614, lng: 2.352222 }
    );

    expect(distance).toBeGreaterThan(0);
  });
});