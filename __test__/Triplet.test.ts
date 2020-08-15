import { Triplet } from "../src/ds/Triplet";

describe("Triplet Tests ", () => {
  test("Init", () => {
    const triplet = new Triplet<number, string, string>(1, "Avijeet", "B+");

    expect(triplet.first).toBe(1);
    expect(triplet.second).toBe("Avijeet");
    expect(triplet.third).toBe("B+");
    expect(triplet.toList()).toStrictEqual([1, "Avijeet", "B+"]);
    expect(triplet.toString()).toBe("1 Avijeet B+");
  });
});
