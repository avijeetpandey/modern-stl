import { Pair } from "../ds/Pair";

describe("Pair tests", () => {
  test("Init", () => {
    const pair = new Pair<String, number>("Hi mom!", 42);

    expect(pair.first).toBe("Hi mom!");
    expect(pair.second).toBe(42);
    expect(pair.toString()).toBe("Hi mom! 42");
  });
});
